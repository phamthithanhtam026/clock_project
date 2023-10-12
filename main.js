const startBtn = document.querySelector(".startBtn");

const resetBtn = document.querySelector(".resetBtn");

let displayTime = document.querySelector(".time");

// Variables for time
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for display time
let leadSeconds = 0;
let leadMinutes = 0;
let leadHours = 0;

let intervalTime;
let intervalStatus = "Stopped";

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    minutes++;
    seconds = 0;
    if (minutes / 60 === 1) {
      hours++;
      minutes = 0;
    }
  }

  if (seconds < 10) {
    leadSeconds = "0" + seconds.toString();
  } else {
    leadSeconds = seconds;
  }

  if (minutes < 10) {
    leadMinutes = "0" + minutes.toString();
  } else {
    leadMinutes = minutes;
  }

  if (hours < 10) {
    leadHours = "0" + hours.toString();
  } else {
    leadHours = hours;
  }

  displayTime.innerHTML = leadHours + ":" + leadMinutes + ":" + leadSeconds;
}

// start functionWatch
startBtn.addEventListener("click", function () {
  if (intervalStatus == "Stopped") {
    intervalTime = setInterval(stopWatch, 1000);
    startBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    intervalStatus = "Start";
  } else {
    clearInterval(intervalTime);
    startBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    intervalStatus = "Stopped";
  }
});

// reset functionWatch
resetBtn.addEventListener("click", function () {
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime.innerHTML = "00:00:00";
});
