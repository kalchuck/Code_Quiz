var timeEl = document.querySelector(".iTime")
var questionsEl = document.querySelector(".questions-rendered");

var secondsRemaining = 75;
var penaltySeconds = 10;
var timerInterval;
var numCorrect = 0;
var questionIndex = 0;
var highScores;
var highScoresArray = [];
var score = 0;

const startBtn = document.getElementById("start");
const viewScoresBtn = document.getElementById("viewScores");
const initialsDiv = document.getElementById("initialsDiv");
const scoresDiv = document.getElementById("scoresDiv");

// Starts timer
function setTime() 
{
    timerInterval = setInterval(function () 
    {
        secondsRemaining--;
        timeEl.textContent = "Time Remaining: " + secondsRemaining;
        if (secondsRemaining === 0) 
        {
            finish();
        }

    }, 1000);
}

function finish() 
{
    // Stops timer
    clearInterval(timerInterval);
    // Sets variable to zero
    secondsRemaining = 0;
    // Changes time remaining heading to "Done" when the quiz is complete
    document.querySelector(".iTime").innerHTML = "Done";
    // Clears out last question displayed
    questionsEl.textContent = "";
    // Calculates score 
    score = numCorrect * (100 / questions.length);
    // Displays final score
    document.getElementById("choice-response").innerHTML = "Your final score is: " + score;
    // Pops up div to enter initials
    initialsDiv.style.display = "block";
    // Clears out textbox of previous user initials; empty box every time 
    document.getElementById("myInitials").value = "";
}

// Gets initials after selecting submit button
// Does not validate whether or not initials were entered
function getInitials() 
{
    if (highScoresArray.length === 0) 
    {
        highScores = document.getElementById("myInitials").value + " - " + score;
    }
    else {
        highScores = " " + document.getElementById("myInitials").value + " - " + score;
    }

    highScoresArray.push(highScores);
    initialsDiv.style.display = "none";
    document.querySelector(".iTime").innerHTML = "High Scores";
    document.getElementById("choice-response").innerHTML = highScoresArray;
    scoresDiv.style.display = "block";
}

// If "Go Back" button is clicked, this function is triggered to go back to the start page
function startOver() 
{
    document.getElementById("choice-response").innerHTML = "";
    scoresDiv.style.display = "none";
    timeEl.textContent = "Time Remaining: 0";
    startBtn.style.display = "initial";
    viewScoresBtn.style.display = "initial";
    document.getElementById("instructions").innerHTML = "As a coding bootcamp student, I want to take a timed quiz on JavaScript fundamentals that stores high scores so I can gauge my progrees compared to my peers.";
}

// If clicked, will show high scores in the array, but if array is empty, shows "no scores"
function viewAllScores() 
{
    if (highScoresArray.length === 0) 
    {
        document.getElementById("choice-response").innerHTML = "No Scores: "
    }
    else 
    {
        document.getElementById("choice-response").innerHTML = "High Scores: " + highScoresArray;
    }
}

// Empties array when "Clear High Scores" is clicked 
function clearScores() 
{
    highScoresArray = [];
    document.getElementById("choice-response").innerHTML = highScoresArray;
}

// Resetting values needed to start a new quiz
startBtn.addEventListener('click', function () 
{
    secondsRemaining = 75;
    setTime();

    numCorrect = 0;
    questionIndex = 0;

    startBtn.style.display = "none";
    viewScoresBtn.style.display = "none";

    document.getElementById("choice-response").innerHTML = "";
    document.getElementById("instructions").innerHTML = "";

    displayQuestions();
})

// Displays question and answers from the array one after the other
function displayQuestions() 
{
    if (secondsRemaining <= 0 || questionIndex >= questions.length) 
    {
        finish();
        return;
    }
    questionsEl.textContent = "";

    var question = questions[questionIndex];
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("p");

    questionText.textContent = question.title;

    questionDiv.appendChild(questionText)

    for (i = 0; i < question.choices.length; i++) 
    {
        var option = document.createElement("button");

        option.textContent = question.choices[i];

        option.style.cssText = "display: block; padding: 5px; margin-left: 40%; margin-bottom: 5px; width: 175px;";
        option.setAttribute("class", "option");

        option.addEventListener("click", function (e) 
        {
            var optionClicked = (e.target.innerHTML);
            if (optionClicked === questions[questionIndex].correctAnswer) 
            {
                // Variable is keeping track of the correct answers
                numCorrect++;
                document.getElementById("choice-response").innerHTML = "correct";
                displayQuestions(questionIndex++);
            }
            else 
            {
                // Incorrect answers result in a time penalty
                secondsRemaining = secondsRemaining - penaltySeconds;
                document.getElementById("choice-response").innerHTML = "wrong";
                displayQuestions(questionIndex++);
            }
        })
        questionDiv.appendChild(option);
    }

    questionsEl.appendChild(questionDiv);
}