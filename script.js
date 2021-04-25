let homePage = document.getElementById("homePage")
let startButton = document.getElementById("start").addEventListener("click", questionOne);
let questionTwoButton = document.getElementById("passq2").addEventListener("click", questionTwo);
//let questionThreeButton = document.getElementById("passq3").addEventListener("click", questionThree);


function questionOne() {
  document.getElementById('homePage').innerHTML = document.getElementById('questionOne').innerHTML;
    if(document.getElementById('q1c2').clicked)
  console.log('yes')
  else(
  console.log('no'))
}
function questionTwo(){
  document.getElementById('questionOne').innerHTML = document.getElementById('questionTwo').innerHTML;
    if(document.getElementById('q1c2').clicked)
  console.log('yes')
  else(
  console.log('no'))
}

// let questionOne = 
// let secondsLeft = "90";
// let startTimer = document.querySelector("#timer")
// let time = document.querySelector("#time");

// time = 15;

// function setTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timer.textContent = secondsLeft + " seconds left till colorsplosion.";
//   console.log(secondsLeft);
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
//     }, 1000);
//   }