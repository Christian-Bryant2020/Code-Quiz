let secondsLeft = "90";
let startTimer = document.querySelector("#timer")
let time = document.querySelector("#time");

time = 15;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left till colorsplosion.";
  console.log(secondsLeft);
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }