/*function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;
    if (question1 == "null means absence of a value") {
      correct++;
    }
    if (question2 == "Var") {
      correct++;
    }
    if (question3 == "False") {
      correct++;
    }
    var pictures = [
      "https://giphy.com/gifs/fox-sewLdIgvVnzTG",
      "https://media.tenor.com/images/e53ac87e67659dd7d0ffb69952bf3fc5/tenor.gif(199 kB)
      "https://media.tenor.com/images/e53ac87e67659dd7d0ffb69952bf3fc5/tenor.gif",
      "https://stock.adobe.com/images/you-win-design-element-eps10-cmyk/101346382"
    ];
    var messages = [
      "Great job!",
      "That's just okay",
      "You really need to do better"
    ];
    var score;
    if (correct == 0) {
      score = 2;
    }
    if (correct > 0 && correct < 3) {
      score = 1;
    }
    if (correct == 3) {
      score = 0;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML =
      "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
   }
   GiphyGiphy(507 kB)
  */