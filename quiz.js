​
//Psuedo code:
// needs a call to action to "start quiz" (alert and button)
​
var questionQuiz = document.getElementById("quiz");
var submitAnswer = document.getElementById("select");
var questionSubmit = document.getElementById("results");
​
var startQuiz = document.getElementById("start");
​
// variableName.addEventListener(arg1, arg2)
// variableName.addEventListener(what we listen to, what we do)
var score = 0;
var secondsLeft = 75;
​
function showScore() {
  var x = document.getElementById("quiz");
  // if (x.style.display === "none") {
    x.style.display = "none";
  // } else {
  //   x.style.display = "none";
  // }
}
​
function goToNextQuestion(whatTheUserClicked) {
  var correctText = questions[currentQuestionIndex].answer;
  //remember to stop and reset the time here
  if (whatTheUserClicked === correctText) {
    console.log("Correct!");
    document.querySelector("#results").innerHTML = "Correct !";
    score++;
  }
  else {
    console.log("Sorry, that is not correct.");
    document.querySelector("#results").innerHTML = "Sorry, that is not correct.";
  }
  currentQuestionIndex++;
  getNewQuestion(currentQuestionIndex);
​
​
}
​
function answerClickSetUp() {
  var a = document.getElementById("answer1");
  var b = document.getElementById("answer2");
  var c = document.getElementById("answer3");
  var d = document.getElementById("answer4");
​
  a.addEventListener("click", function () { goToNextQuestion(a.innerText); });
  b.addEventListener("click", function () { goToNextQuestion(b.innerText); });
  c.addEventListener("click", function () { goToNextQuestion(c.innerText); });
  d.addEventListener("click", function () { goToNextQuestion(d.innerText); });
}
answerClickSetUp();
​
startQuiz.addEventListener("click", function () {
  getNewQuestion(currentQuestionIndex);
});
​
var currentQuestion;
function getNewQuestion(questionIndex) {
   //stopwatch.start();
  
  // if (x.style.display === "none") {
  document.getElementById("quiz").style.display = "block";
  var question = questions[questionIndex];
  currentQuestion = question;
  var title = question.title;
  // console.log(title);
  var questionEl = document.getElementById("question");
  questionEl.innerText = title;
​
  var choice1 = question.choices[0];
  var answerEl1 = document.getElementById("answer1");
  answerEl1.innerText = choice1;
  // console.log(choice1);
​
  var choice2 = question.choices[1];
  var answerEl2 = document.getElementById("answer2");
  answerEl2.innerText = choice2;
  // console.log(choice2);
​
  var choice3 = question.choices[2];
  var answerEl3 = document.getElementById("answer3");
  answerEl3.innerText = choice3;
  // console.log(choice3);
​
  var choice4 = question.choices[3];
  var answerEl4 = document.getElementById("answer4");
  answerEl4.innerText = choice4;
  // console.log(choice4);
​
​
  document.getElementById("question").innerText = title;
  document.getElementById("answer1").innerText = choice1;
  document.getElementById("answer2").innerText = choice2;
  document.getElementById("answer3").innerText = choice3;
  document.getElementById("answer4").innerText = choice4;
​
​
​
​
  if (choice1 === questions.answer) {
    alert("You are correct!")
  }
  else if (choice2 === questions.answer) {
    alert("You are correct!")
  }
  else if (choice3 === questions.answer) {
    alert("You are correct!")
  }
  else if (choice4 === questions.answer) {
    alert("You are correct!")
  }
​
}
//submitAnswer.addEventListener("click", quizTime);
var currentQuestionIndex = 0;
// getNewQuestion(currentQuestionIndex);
​
//user needs to click a button and hit submit
//when submit is hit then it goes through a loop
​
//need to build a high score page and a timer that starts at 75 seconds (increments, count++)
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
​
// var secondsLeft = 75;
​
// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " Timer";
​
//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
​
//   }, 1000);
// }
​
​
// setTime();
//needs a onclick event to start the quiz (make a button also) and then the questions will appear.  Need to have a click event for the answer button to show the next question
//timer needs to start as soon as the question appears.  Make sure the timer is given a max amount of time for the user to click an answer and count downwards
​
//start calculating the score incrementally when the user gets a right answer ; create an alert on the page that tells you if the answer is right or wrong
//answering incorrectly results in a time penalty of 5 seconds from the total of seconds
​
// Submit function
​
var submitEl = document.querySelector("#select");
var nameInput = document.querySelector("#name");
var submissionResponseEl = document.querySelector("#response");
​
submitEl.addEventListener("click", function(event) {
  event.preventDefault();
  showScore();
  console.log(event);
  //remember to check the current val against localstorage score, if larger update name and score to current user
  var response = "Thank you for your submission " + nameInput.value;
  submissionResponseEl.textContent = response;
});
​
​
// answer is correct or wrong
var mouseEventsEl = document.querySelector("#click-events");
​
function toggleDisplay(event) {
    var value = event.target.value;
    if(value === "keydown") {
      mouseEventsEl.classList.add("hide");
     }
    else {
      mouseEventsEl.classList.remove("hide");
     
    }
  }
​
function click(event) {
    var target = event.target.textContent;
    document.querySelector("#target").textContent = target;
    
  }
​
  document.addEventListener("click", click);
​
  //  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
​
//prevents the clock from being sped up unnecessarily
var clockRunning = false;
​
// Our stopwatch object
var stopwatch = 
{
​
  time: 75,
​
​
  reset: function() 
  {
​
    stopwatch.time = 75;
​
​
    // DONE: Change the "display" div to "00:00."
    $(".time").text("Time: 1:15");
​
    // DONE: Empty the "laps" div.
​
  },
​
  start: function() 
  {
​
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() 
  {
​
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  
  count: function() 
  {
​
    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;
    //console.log("time: "+stopwatch.time)
​
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
​
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $(".time").text("Time: "+converted);
  },
  timeConverter: function(t) 
  {
​
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
​
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
​
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
​
    return minutes + ":" + seconds;
  }
};
//make it responsive in html
​
//when timer is done and/or all questions have been answered, show final score and create an input for the user to enter intials
// then show final score and initials in "local storage"
​
// store questions as an array of objects in a separate js file
// so you will need to reference questions.js
//length of array will determine the length of play: 15 seconds per question so if i have 5 questions then the time will be 75
​
​
// display completion message 
​
/* var tagName = document.getElementById("select");
​
if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  var tag = document.createElement(tagName);
  tag.textContent = "Congraluations" + tagName;
  document.body.appendChild(tag);
}
​
*/  