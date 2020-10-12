/*
*************** Coding Quiz *********************
script.js
This is where all the magic will happen, 
the HTML structure is setup so that we can address all elements using 
JavaScript. 
*/
// Getting all the elements to modify them through JS
var startEl = document.getElementById('start'); //start button
var startBtn = document.getElementById('startbtn'); //start button
var timerEl = document.getElementById('countdown'); //timer
var containerEl = document.getElementById('containter') // container div
var quizEl = document.getElementById('quiz'); //quiz element encompassing question and answer
var questionsEl = document.getElementById('questions'); // put in content in the main
var choicesEl = document.getElementById('choices'); // put in content in the main
var firstChoice=document.getElementById('choice1'); // choice 1
var secondChoice=document.getElementById('choice2'); // choice 2
var thirdChoice=document.getElementById('choice3'); // choice 3
var fourthChoice=document.getElementById('choice4');// choice 4
var scoreEl = document.getElementById('score'); // score div
var answerStatusEL = document.getElementById('answerStatus');


// Array of Questions and answers and the right answer

var questionAndAnswerArray = 
[{question: "Which of the following is NOT a JavaScript Data Type?", 
choice1:"Undefined", choice2:"Number", choice3:"Float", choice4:"Boolean",
correct: 'choice3'},
{question: "Inside which HTML element do we put the JavaScript in?", 
choice1:"script", choice2:"head", choice3:"body", choice4:"style",
correct: 'choice1'},
{question: "Which of the following is NOT a JavaScript Data Type?", 
choice1:"Undefined", choice2:"Number", choice3:"Float", choice4:"Boolean",
correct: 'choice3'}
]
//seting up global variables
var score = 0;
var timeLeft = 10;
currentQuestionIndex = 0;
finalQuestion = questionAndAnswerArray.length -1;

// Timer that counts down from 100
function countdown() {  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft>=1){
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
        // quiz()
      }else{
        // timerEl.textContent = "";
        renderScore()
        if (score === 0 || score === null){
            timerEl.textContent = "Time: 0";
        }
        clearInterval(timeInterval);
        // done();
      }
      
    }, 1000);
}

var renderQuiz = function(){
    var q = questionAndAnswerArray[currentQuestionIndex];
    questionsEl.innerHTML= "<p>"+q.question +"</p>";
    firstChoice.innerHTML= q.choice1;
    secondChoice.innerHTML= q.choice2;
    thirdChoice.innerHTML= q.choice3;
    fourthChoice.innerHTML= q.choice4;

}

var validateAnswer = function(answer){
    if (answer == questionAndAnswerArray[currentQuestionIndex].correct){
        
        correctAnswer();
        score++;
    }else{
        wrongAnswer();
        timeLeft = timeLeft -10;
    }
    if (currentQuestionIndex < finalQuestion){
        currentQuestionIndex++;
        renderQuiz();
    }else{
        renderScore();
    }
}

var correctAnswer = function(){
    answerStatusEL.innerHTML = "<p> Correct! </p>";

}

var wrongAnswer = function(){
    answerStatusEL.innerHTML = "<p> Wrong! </p>";
}

var renderScore = function(){
    quizEl.style.display = "none";
    scoreEl.style.display = "block";
    score = document.getElementById("");
    console.log(score);
}


var startQuiz = function(){
    countdown();
    startEl.style.display = "none";
    renderQuiz();
    quizEl.style.display = "block";
}


startBtn.addEventListener("click", startQuiz)