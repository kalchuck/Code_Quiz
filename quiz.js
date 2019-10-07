
//Psuedo code:
// needs a call to action to "start quiz" (alert and button)

var questionQuiz = document.getElementById("quiz");
var submitAnswer = document.getElementById("select");
var questionSubmit = document.getElementById("results");

var startQuiz = document.getElementById("start");

// variableName.addEventListener(arg1, arg2)
// variableName.addEventListener(what we listen to, what we do)
var score = 0;
var secondsLeft = 75;

function goToNextQuestion(whatTheUserClicked) {
  var correctText = questions[currentQuestionIndex].answer;

  if (whatTheUserClicked === correctText) {
    console.log("Correct!");
    score++;
  }
  else {
    console.log("Sorry, that is not correct.");
  }
  currentQuestionIndex++;
  getNewQuestion(currentQuestionIndex);


}

function answerClickSetUp() {
  var a = document.getElementById("answer1");
  var b = document.getElementById("answer2");
  var c = document.getElementById("answer3");
  var d = document.getElementById("answer4");

  a.addEventListener("click", function () { goToNextQuestion(a.innerText); });
  b.addEventListener("click", function () { goToNextQuestion(b.innerText); });
  c.addEventListener("click", function () { goToNextQuestion(c.innerText); });
  d.addEventListener("click", function () { goToNextQuestion(d.innerText); });
}
answerClickSetUp();

startQuiz.addEventListener("click", function () {
  getNewQuestion(currentQuestionIndex);
});

var currentQuestion;
function getNewQuestion(questionIndex) {
  var question = questions[questionIndex];
  currentQuestion = question;
  var title = question.title;
  // console.log(title);
  var questionEl = document.getElementById("question");
  questionEl.innerText = title;

  var choice1 = question.choices[0];
  var answerEl1 = document.getElementById("answer1");
  answerEl1.innerText = choice1;
  // console.log(choice1);

  var choice2 = question.choices[1];
  var answerEl2 = document.getElementById("answer2");
  answerEl2.innerText = choice2;
  // console.log(choice2);

  var choice3 = question.choices[2];
  var answerEl3 = document.getElementById("answer3");
  answerEl3.innerText = choice3;
  // console.log(choice3);

  var choice4 = question.choices[3];
  var answerEl4 = document.getElementById("answer4");
  answerEl4.innerText = choice4;
  // console.log(choice4);


  document.getElementById("question").innerText = title;
  document.getElementById("answer1").innerText = choice1;
  document.getElementById("answer2").innerText = choice2;
  document.getElementById("answer3").innerText = choice3;
  document.getElementById("answer4").innerText = choice4;




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

}
//submitAnswer.addEventListener("click", quizTime);
var currentQuestionIndex = 0;
// getNewQuestion(currentQuestionIndex);

//user needs to click a button and hit submit
//when submit is hit then it goes through a loop

//need to build a high score page and a timer that starts at 75 seconds (increments, count++)

//needs a onclick event to start the quiz (make a button also) and then the questions will appear.  Need to have a click event for the answer button to show the next question
//timer needs to start as soon as the question appears.  Make sure the timer is given a max amount of time for the user to click an answer and count downwards

//start calculating the score incrementally when the user gets a right answer ; create an alert on the page that tells you if the answer is right or wrong
//answering incorrectly results in a time penalty of 5 seconds from the total of seconds

//make it responsive in html

//when timer is done and/or all questions have been answered, show final score and create an input for the user to enter intials
// then show final score and initials in "local storage"

// store questions as an array of objects in a separate js file
// so you will need to reference questions.js
//length of array will determine the length of play: 15 seconds per question so if i have 5 questions then the time will be 75
