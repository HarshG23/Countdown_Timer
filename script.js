
let intervalId;
let isPaused = false;
let timeInSeconds = 0;

function updateTime() {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer').innerText = formattedTime;
}

function startTimer() {
  if (isPaused) {
    isPaused = false;
  } else {
    timeInSeconds = 0;
    updateTime();
  }

  intervalId = setInterval(() => {
    timeInSeconds++;
    updateTime();
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
  isPaused = true;
}

function stopTimer() {
  clearInterval(intervalId);
  timeInSeconds = 0;
  updateTime();
  isPaused = false;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
