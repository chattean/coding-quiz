// variable declarations
var timerEl = document.getElementById('countdown'); //timer
var questionsEl = document.getElementById('questions'); // put in content in the main
var answersEl = document.getElementById('answers'); // put in content in the main
var startBtn = document.getElementById('start');


var questionAndAnswerArray = [{q: "question 1", a: {choice1: "heel",validation:true },
{q: "question 2", a: "yao"}]
var score = 0;
var timeLeft = 300;

var quiz = function(){
    
    for (var i = 0; i < questionAndAnswerArray.length; i++){
        questionsEl.textContent = questionAndAnswerArray[i].q;
        answersEl.textContent = questionAndAnswerArray[i].a;
        

        // var confirmAnswer = confirm(questionAndAnswerArray[i].q);
        // if (confirmAnswer === questionAndAnswerArray[i].a){
        //     alert("You are correct");
        //     score++;
        // }else{
        //     alert("you are wrong");
        // }
    }
}
// alert("You got " + score + " correct");

// Timer that counts down from 5
function countdown() {  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft>=1){
        timerEl.textContent = timeLeft;
        timeLeft--;
      }else{
        timerEl.textContent = "";
        clearInterval(timeInterval);
        displayMessage()
      }
      
    }, 1000);
  }

  startBtn.onclick = countdown;