let quizContainer = document.getElementById("quizContainer");
let submitButton = document.getElementById('submit');
let startButton = document.getElementById("start");
let timer = document.getElementById("timer");
let timerLeft = 60;

startButton.addEventListener("click", quizStart);

let questions = [
  {
    question: "Words for question one",
    options: {
      1: 'one',
      2: 'two',
      3: 'three'
    },
    correctAnswer: '3'
  },
  {
    question: "Words for question one",
    options: {
      1: 'one',
      2: 'two',
      3: 'three'
    },
    correctAnswer: '3'
  },
  {
    question: "Words for question one",
    options: {
      1: 'one',
      2: 'two',
      3: 'three'
    },
    correctAnswer: '3'
  }
];

function quizStart(){
  quizContainer.innerHTML = questions[0].options[1];
  console.log(quizContainer)
};

function setTimmer(){
  timeInterval = setInterval(function(){
    timer.textContent = timerLeft;
    timerLeft--;

    if(timerLeft === 0){
      displayScores();
    }
  })
}
console.log(quizContainer)
