$(document).ready(function () {
    var titleEl = document.querySelector('#title');
    var questionEl = document.querySelector('#quiz-question');
    var buttonEl = document.querySelector('#button-box');
    var formEl = document.querySelector('#form-box');
    var scoreBoxEl = document.querySelector('#scores-box');
    var scoreNameEl = document.querySelector('#inputName');
    var highscoreEl = document.querySelector('#highscores');


    $("#start").click(function () {
        $("#button-box").empty();
        titleEl.setAttribute("class", "hide")
        timer()
        nextquestion()
    });

    var interval;
    var count = 75;

    function timer() {
        var time = document.querySelector("#time")
        time.innerHTML = count
        interval = setInterval(function () {
            if (count === 0) {
                stopQuiz()
            }

            else {
                count--
                time.innerHTML = count
            }

        }, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
    }

    var score;

    function stopQuiz() {
        stopTimer()
        $("#button-box").empty();
        buttonEl.setAttribute("class", "hide")
        formEl.removeAttribute("class", "hide")
        formEl.setAttribute("class", "col-8 text-center")
        questionEl.innerText = "Times up!"
        score = time.innerText
    }

    var questionindex = 0;

    function nextquestion() {
        var currentQuestion = questions[questionindex];
        questionindex++
        console.log(currentQuestion)

        if (questionindex <= questions.length) {
            questionEl.innerText = currentQuestion.title
            for (var i = 0; i < currentQuestion.choices.length; i++) {
                var answerButton = document.createElement("button")
                answerButton.setAttribute("class", "btn answerbtn")
                answerButton.innerHTML = currentQuestion.choices[i]
                answerButton.setAttribute("data-id", currentQuestion.choices[i])
                buttonEl.appendChild(answerButton);
            }
        }

        else {
            stopQuiz()
        }

        $(".answerbtn").click(function () {

            var selected = $(this).attr("data-id")
            var answer = currentQuestion.answer
            console.log(answer)
            console.log(selected)

            if (answer === selected) {
                count = count + 15
                $("#button-box").empty();
                nextquestion()

            }
            else {
                $("#button-box").empty();
                nextquestion()
                count = count - 15
                time.innerHTML = count
            }
        });

    }

    $("#submit").click(function (event) {
        generateScores()
    });

    function generateScores() {
        highscores = JSON.parse(localStorage.getItem("scores")) || [];

        highscores.unshift({
            name: scoreNameEl.value,
            score: score,
        });

        localStorage.setItem("scores", JSON.stringify((highscores)))

        formEl.setAttribute("class", "hide")
        questionEl.innerText = "Beat the highscore!"
        scoreBoxEl.removeAttribute("class", "hide")
        scoreBoxEl.setAttribute("class", "col-8 text-center")
        for (var j = 0; j < highscores.length; j++) {
            var highscores = JSON.parse(localStorage.getItem("scores")) || [];
            $("#yourScores").append('<li class="list-group-item">' + "Name: " + highscores[j].name + "  Score: " + highscores[j].score + '</li>')
        }

    }

    highscoreEl.addEventListener("click", function () {
        titleEl.setAttribute("class", "hide")
        $("#button-box").empty();
        generateScores()
    })


    $("#clearScore").click(function () {
        localStorage.clear()
        $("#yourScores").empty()
    })
})
