let quizContainer = document.getElementById("quizContainer");
let submitButton = document.getElementById('submit');
let startButton = document.getElementById("start-btn");
let timer = document.getElementById("timer");
let timerLeft = 60;
let welcomeText = document.getElementById("welcome-text")
let nextBtn = document.getElementById("next-btn")
let questionIndex = 0;
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

function quizStart(){
  console.log("hello")
  startButton.classList.add("hide");
  welcomeText.classList.add("hide");
  nextBtn.classList.remove("hide");
  quizContainer.textContent = questions[questionIndex].question; 

  for(var i = 0; i < questions.length; i++){
    answerChoices = document.createElement("btn");
    brLine = document.createElement("br");
    answerChoices.setAttribute("class","btn ");
    answerChoices.setAttribute("value", questions[questionIndex].values[i]);
    answerChoices.textContent= questions[questionIndex].choices[i];
    answers.append(answerChoices);
    answers.append(brLine);
  }

  function setTimmer(){
    timeInterval = setInterval(function(){
      timer.textContent = timerLeft;
      timerLeft--;
  
      if(timerLeft === 0){
        displayScores();
      }
    })
  }
};



startButton.addEventListener("click", quizStart);