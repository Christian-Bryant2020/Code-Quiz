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
let questions = [
  {
    question: "This is the text for question one",
    choices: ["Don't choose this", "Don't choose this", "Don't choose this", "correct"],
    values: ["incorrect", "incorrect", "incorrect", "correct"]
  },
  {
    question: "This is the text for question two",
    choices: ["Don't choose this", "Don't choose this", "correct", "Don't choose this"],
    values: ["incorrect", "incorrect", "correct", "incorrect"]
  },
  {
    question: "This is the text for question three",
    choices: ["Don't choose this", "Don't choose this", "correct", "Don't choose this"],
    values: ["incorrect", "incorrect", "correct", "incorrect"]
  },
  {
    question: "This is the text for question four",
    choices: ["Don't choose this", "Don't choose this", "Don't choose this", "correct"],
    values: ["incorrect", "incorrect", "incorrect", "correct"]
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
    answerChoices.setAttribute("status", questions[arrayIndex].values[i]);
    answerChoices.textContent = questions[arrayIndex].choices[i];
    answers.append(answerChoices);
    answers.append(brLine);
  }
  validateAnswer();
};

function validateAnswer() {
  let allBtn = document.querySelectorAll(".btn-outline-primary")
  allBtn.forEach(function (allBtn) {
    allBtn.addEventListener("click", function () {
      console.log(allBtn)
      console.log(this.status)

      if (this.status == "correct") {
        alert("Correct!");
        score++
        arrayIndex++;
        nextQuestion();
      } else {
        arrayIndex++;
        alert("Incorrect!")
        nextQuestion();
      }
    })
  })
};

function nextQuestion() {
  if (arrayIndex < 4) {
    quizContainer.textContent = questions[arrayIndex].question;
    for (i = 0; i < questions.length; i++) {
      document.getElementsByClassName("btn-outline-primary")[i].textContent = questions[2].choices[i];
      document.getElementsByClassName("btn-outline-primary")[i].setAttribute("value", questions[2].values[i]);
    }
  }
  else {
    displayScores();
  }
}

function displayScores() {
  clearInterval(timeInterval);
  quizContainer.textContent = ("GG! Your score is " + score);
}

function setTimmer() {
  console.log(
    'started'
  )
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