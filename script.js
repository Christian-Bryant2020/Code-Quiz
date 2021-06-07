let quizContainer = document.getElementById("quizContainer");
let submitButton = document.getElementById('submit');
let startButton = document.getElementById("start-btn");
let timer = document.getElementById("timer");
let timerLeft = 60;
let timeInterval;
let score = 0;
let welcomeText = document.getElementById("welcome-text")
let arrayIndex = 0;
let answers = document.getElementById("answer-options")
let allBtn = document.querySelectorAll(".btn-outline-primary")
let questions = [
  {
    question: "Which of the following is an advantage of using JavaScript?",
    choices: ["Less server interaction", "Immediate feedback to the visitors", "Increased interactivity", "All of the above."],
    values: ["Less server interaction", "Immediate feedback to the visitors", "Increased interactivity", "All of the above."],
    answer: "All of the above."
  },
  {
    question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    choices: ["last()", "put()", "push()", "None of the above."],
    values: ["last()", "put()", "push()", "None of the above."],
    answer: "push()"
  },
  {
    question: "Which built-in method reverses the order of the elements of an array?",
    choices: ["changeOrder(order)", "reverse()", "sort(order)", "None of the above."],
    values: ["changeOrder(order)", "reverse()", "sort(order)", "None of the above."],
    answer: "reverse()"
  },
  {
    question: "Which of the following function of String object is used to match a regular expression against a string?",
    choices: ["concat()", "match()", "search()", "replace()"],
    values: ["concat()", "match()", "search()", "replace()"],
    answer: "Q4: correct"
  }
];


function quizStart() {
  startButton.classList.add("hide");
  welcomeText.classList.add("hide");
  timer.classList.remove("hide");
  quizContainer.textContent = questions[arrayIndex].question;

  for (var i = 0; i < questions.length; i++) {
    answerChoices = document.createElement("btn");
    brLine = document.createElement("br");
    answerChoices.setAttribute("class", "btn btn-outline-primary");
    answerChoices.textContent = questions[arrayIndex].choices[i];
    answerChoices.onclick = validateAnswer;
    answers.append(answerChoices);
    answers.append(brLine);
  }
};

function validateAnswer() {
  if (this.textContent === questions[arrayIndex].answer) {
    alert("Correct!");
    score++
    nextQuestion();
  } 
  else {
    alert("Incorrect!")
    nextQuestion();
  }
};

function nextQuestion() {
  arrayIndex++;
  if (arrayIndex < 4) {
    quizContainer.textContent = questions[arrayIndex].question;
    for (i = 0; i < questions.length; i++) {
      document.getElementsByClassName("btn-outline-primary")[i].textContent = questions[arrayIndex].choices[i];
      document.getElementsByClassName("btn-outline-primary")[i].setAttribute("value", questions[arrayIndex].values[i]);
    }
  }
  else {
    displayScores();
  }
}

function displayScores() {
  clearInterval(timeInterval);
  answers.classList.add("hide");
  quizContainer.textContent = ("GG! Your score is " + score);
}

function setTimmer() {
  timeInterval = setInterval(function () {
    timer.textContent = "Time left: " + timerLeft;
    timerLeft--;
    if (timerLeft === 0) {
      displayScores();
    }
  }, 1000);
}
startButton.addEventListener("click", function () {
  quizStart();
  setTimmer();
});