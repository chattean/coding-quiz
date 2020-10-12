// variable declarations
var timerEl = document.getElementById('countdown'); //timer
var mainEl = document.getElementById('main') // main div
var questionsEl = document.getElementById('questions'); // put in content in the main
var answersEl = document.getElementById('answers'); // put in content in the main

var startBtn = document.getElementById('start'); //start button


// creating answer form
// answersEl.appendChild(option);
// answersEl.appendChild(answersForm)
// Question and answers array/objects
var questionAndAnswerArray = 
[{q: "question 1", a: [{choice: "heel",validation:false},{choice: "yell",validation:true}]},
{q: "question 2", a: [{choice: "tell",validation:false},{choice: "mell",validation:true}]}
]

var score = 0;
var timeLeft = 5;


var quiz = function(){
    
    for (var i = 0; i <= questionAndAnswerArray.length-1; i++){
        // var questionsEl = document.createElement("div")
        questionsEl.innerHTML = questionAndAnswerArray[i].q;
        console.log(questionAndAnswerArray[i].q)
        // debugger;
        for (var c = 0; c < questionAndAnswerArray[i].a.length;c++){
            choice = questionAndAnswerArray[i].a[c].choice;
            console.log(choice);
            var choiceButton = document.createElement("BUTTON");
            choiceButton.innerHTML = choice;
            answersEl.appendChild(choiceButton)
        }


        // debugger;
        // cleardiv();
        // var confirmAnswer = confirm(questionAndAnswerArray[i].q);
        // if (confirmAnswer === questionAndAnswerArray[i].a){
        //     alert("You are correct");
        //     score++;
        // }else{
        //     alert("you are wrong");
        // }
    }
}
var cleardiv = function(){
    questionsEl.innerHTML = ""
    answersEl.innerHTML = ""


}
// alert("You got " + score + " correct");

// Timer that counts down from 5
function countdown() {  
    quiz();
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft>=1){
        timerEl.textContent = timeLeft;
        timeLeft--;
        // quiz()
      }else{
        timerEl.textContent = "";
        clearInterval(timeInterval);
        // done();
      }
      
    }, 1000);
  }

  startBtn.onclick = countdown;
