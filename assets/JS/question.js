$(document).ready(function () {
    var startQuiz = document.getElementById(".buttonStart").addEventListener("click", myFunction);

    var questions = [
        {
            prompt: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        },
        {
            prompt: "What is jQuery?",
            choices: ["A programing langage", "a bird", "Javascript Code", "square brackets"],
            answer: "Javascript Code"
        },
        {
            prompt: "What is 'this'?",
            choices: ["that.", "a method", "refers to the object", "this?"],
            answer: "refers to the object"
        },
        {
            prompt: "What type of scripting is jQuery",
            choices: ["server", "javascript", "client", "all of the above"],
            answer: "client"
        },
        {
            prompt: "Which is the fastest selector in jQuery?",
            choices: ["ID", "Elements", "query.selector", "both a & b"],
            answer: "both a & b"
        },

    ]
