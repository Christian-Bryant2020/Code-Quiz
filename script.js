const quizContainer = document.getElementById("quizContainer");
const submitButton = document.getElementById('submit');
const startButton = document.getElementById("start-btn");
const welcomeContainer = document.getElementById("welcome-text")
const answerButtonsElement = document.getElementById("answer-buttons")
let questionElement = document.getElementById("question")
let shuffledQuestions, currentQuestionIndex

let questions = [
  {
     question: 'What is JavaScript?',
     answers: [
       { text: 'correct', correct: true },
       { text: 'false', correct: false },
       { text: 'false', correct: false },
       { text: 'false', correct: false },
     ]
   }
  ];

startButton.addEventListener("click", quizStart);

function quizStart() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  quizContainer.classList.remove('hide')
  nextQuestion()
};

 function nextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
};

 function showQuestion(question) {
   questionElement.innerText = questions.question
  //  question.answers.forEach(answers => {
  //    const button = document.createElement('button')
  //    button.inerText = answers.textbutton.classList.add('btn')
  //    if (answers.correct) {
  //      button.dataset.correct = answers.correct
  //    }
  //    button.addEventListener('click', selectAnswer)
  //    answerButtonsElement.appendChild(button)
  //  })
 }
 


function selectAnswer(){
};