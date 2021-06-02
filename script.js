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
    question: "This is the text for question one",
    choices: ["Q1: Don't choose this", "Q1: Don't choose this", "Q1: Don't choose this", "Q1: correct"],
    values: ["incorrect", "incorrect", "incorrect", "correct"],
    answer: "Q1: correct"
  },
  {
    question: "This is the text for question two",
    choices: ["Q2: Don't choose this", "Q2: Don't choose this", "Q2: correct", "Q2: Don't choose this"],
    values: ["incorrect", "incorrect", "correct", "incorrect"],
    answer: "Q2: correct"
  },
  {
    question: "This is the text for question three",
    choices: ["Q3: correct", "Q3: Don't choose this", "Q3: Don't choose this", "Q3: Don't choose this"],
    values: ["correct", "incorrect", "incorrect", "incorrect"],
    answer: "Q3: correct"
  },
  {
    question: "This is the text for question four",
    choices: ["Q4: Don't choose this", "Q4: Don't choose this", "Q4: Don't choose this", "Q4: correct"],
    values: ["incorrect", "correct", "incorrect", "incorrect"],
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