/*
*************** Coding Quiz *********************
script.js
This is where all the magic will happen, 
the HTML structure is setup so that we can address all elements using 
JavaScript. 
*/
// Getting all the elements to modify them through JS
var startEl = document.getElementById('start'); //start Div
var startBtn = document.getElementById('startbtn'); //start button
var startBtn2 = document.getElementById('startbtn2'); //start Over button
var timerEl = document.getElementById('countdown'); //timer
var containerEl = document.getElementById('containter') // container div
var quizEl = document.getElementById('quiz'); //quiz element encompassing question and answer
var questionsEl = document.getElementById('questions'); // put in content in the main
var choicesEl = document.getElementById('choices'); // put in content in the main
var firstChoice = document.getElementById('choice1'); // choice 1
var secondChoice = document.getElementById('choice2'); // choice 2
var thirdChoice = document.getElementById('choice3'); // choice 3
var fourthChoice = document.getElementById('choice4');// choice 4
var scoreEl = document.getElementById('score'); // score div
var answerStatusEl = document.getElementById('answerStatus');
var coundownEl = document.getElementById('countdown');
var timerPauseEl = document.getElementById('timerPause');
var highScoreSpan = document.querySelector("#high-score");
var initialInput = document.querySelector("#initials");
var highScorePageEl = document.getElementById('highScorePage');
var highScoreSubmitBtn = document.getElementById('submitBtn');
var listOfHighScoresEl = document.getElementById('listOfHighScores');
var highScorePageLinkEl = document.getElementById('highScoreLink');
var listOfInitialsEl = document.getElementById('listOfInitials');
var listOfScoresEL = document.getElementById('listOfScores');
// Array of Questions and answers and the right answer

var questionAndAnswerArray =
    [{
        question: "Which of the following is NOT a JavaScript Data Type?",
        choice1: "Undefined", choice2: "Number", choice3: "Float", choice4: "Boolean",
        correct: 'choice3'
    },
    {
        question: "What are the two basic groups of dataypes in JavaScript?",
        choice1: "Primitive", choice2: "Reference types", choice3: "All of the above", choice4: "None of the above",
        correct: 'choice3'
    },
    {
        question: "Which company developed JavaScript?",
        choice1: "Netscape", choice2: "Bell Labs", choice3: "Sun Microsystems ", choice4: "IBM",
        correct: 'choice1'
    },
    {
        question: "Which of the following is not Javascript frameworks or libraries?",
        choice1: "Polymer", choice2: "Meteor", choice3: "Cassandra", choice4: "jQuery",
        correct: 'choice3'
    },
    {
        question: "What does javascript use instead of == and !=?",
        choice1: "It uses bitwise checking", choice2: "it uses === and !== instead", choice3: "It uses equals() and notequals() instead", choice4: "It uses equalto()",
        correct: 'choice2'
    },
    {
        question: "Among the keywords below, which one is not a statement?",
        choice1: "if", choice2: "with", choice3: "debugger", choice4: "use strict",
        correct: 'choice4'
    },
    {
        question: "Which of them is not the looping structures in JavaScript?",
        choice1: "for", choice2: "while", choice3: "forwhich", choice4: "dowhile",
        correct: 'choice3'
    },
    {
        question: "What are the types of Pop up boxes available in JavaScript?",
        choice1: "Alert", choice2: "Prompt", choice3: "Confirm", choice4: "All of the above",
        correct: 'choice4'
    },
    {
        question: "Inside which HTML element do we put the JavaScript in?",
        choice1: "script", choice2: "head", choice3: "body", choice4: "style",
        correct: 'choice1'
    },
    {
        question: "What will happen if you reference document.location from within an object?",
        choice1: "Traverses the queue", choice2: "Finds the bugs", choice3: "Traverses the stack", choice4: "Traverses the array",
        correct: 'choice3'
    }
    ]
//seting up global variables
var score = 0;
var highScore = 0;
// localStorage.setItem("high-score", 0)

var highScoreArray = JSON.parse(localStorage.getItem("high-score")) || [];
var highScoreObj = {}
var timeLeft = 100;
var currentQuestionIndex = 0;
var finalQuestion = questionAndAnswerArray.length - 1;
var listofHighScoreArr = [];
var initials = "";

// Timer that counts down from 100
function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            renderScore()
            if (score === 0 || score === null) {
                timerEl.textContent = "Time: 0";
            }
        }
    }, 1000);
}

var renderQuiz = function () {
    var q = questionAndAnswerArray[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + q.question + "</p>";
    firstChoice.innerHTML = q.choice1;
    secondChoice.innerHTML = q.choice2;
    thirdChoice.innerHTML = q.choice3;
    fourthChoice.innerHTML = q.choice4;

}


var renderScore = function () {
    quizEl.style.display = "none";
    coundownEl.style.display = "none";
    score = timeLeft;
    timerPauseEl.style.display = "block";
    scoreEl.style.display = "block";
    if (highScore !== null) {
        if (score > highScore) {
            highScore = score;
        }
    }
    else {
        highScore = score;
    }
    highScoreSpan.textContent = highScore;
    timerPauseEl.innerHTML = "Time Left: " + highScore;
}
var validateAnswer = function (answer) {
    if (answer == questionAndAnswerArray[currentQuestionIndex].correct) {
        correctAnswer();
        score++;
    } else {
        wrongAnswer();
        timeLeft = timeLeft - 10;
    }
    if ((currentQuestionIndex < finalQuestion) || (timeLeft < 0)) {
        currentQuestionIndex++;
        renderQuiz();
    } else {
        renderScore();
        // timerEl.textContent = "Time: "+ highScore;
    }
}

var correctAnswer = function () {
    answerStatusEl.innerHTML = "<p> Correct! </p>";

}

var wrongAnswer = function () {
    answerStatusEl.innerHTML = "<p> Wrong! </p>";
}

var startQuiz = function () {
    countdown();
    currentQuestionIndex = 0;
    finalQuestion = questionAndAnswerArray.length - 1;
    startEl.style.display = "none";
    highScorePageEl.style.display = "none";
    highScorePageLinkEl.style.display = "block";
    renderQuiz();
    quizEl.style.display = "block";
}

function compareHighScores(a, b) {
    return b["highScore"] - a["highScore"];
}


var highScorePage =function () {
    
    //     //hiding the all the others 
        
    //     startEl.style.display = "none";
        // timerPauseEl.style.display = "none";
        // scoreEl.style.display = "none";
        // answerStatusEl.style.display = "none";
        // highScorePageLinkEl.style.display = "none";
        //showing the high score page
        
        //setting values for local storage
        //getting initials and highscore value
        initials = initialInput.value;
        highScore = highScoreSpan.textContent;
        highScoreObj = { "Initials": initials, "highScore": highScore };
        //assinging values to array and then sorting it to list the high scores accurately
        highScoreArray.push(highScoreObj);
        highScoreArray = highScoreArray.sort(compareHighScores);
        //displaying only the top 10 scores
        highScoreArray.splice(10);
        //assigning the high score to local storage
        localStorage.setItem("high-score", JSON.stringify(highScoreArray));
        //Displaying the List Of High Scores
        listofHighScoreArr = JSON.parse(localStorage.getItem("high-score"));
        console.log(listofHighScoreArr);
        for (let i = 0; i < listofHighScoreArr.length -1; i++) {
            listOfInitialsEl.append(listofHighScoreArr[i].Initials);
            listOfScoresEL.append(listofHighScoreArr[i].highScore);
        }
        alert("please check application local storage using chrome Dev tools for you High Scores, the high score page is under constuction")
        highScorePageEl.style.display = "block";
    }

startEl.style.display = "block";
startBtn.addEventListener("click", startQuiz);

highScoreSubmitBtn.addEventListener("click", highScorePage);

highScorePageLinkEl.addEventListener("click", highScorePage);