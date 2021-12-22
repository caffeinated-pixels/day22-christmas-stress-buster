const btn = document.getElementById('btn')
let timer = document.getElementById('timer')
let affirmation = document.getElementById('affirmation')

btn.addEventListener('click', startStopTimer)

let timeLeft = 900
let isTimerRunning = false
let intervalID = null

function startStopTimer() {
  if (!isTimerRunning) {
    startTimer()
  } else {
    pauseTimer()
  }
}

function startTimer() {
  console.log('start timer')
  btn.textContent = 'pause'
  intervalID = setInterval(() => {
    timeLeft--
    updateTimeDisplay()
  }, 1000)
  isTimerRunning = true
}

function pauseTimer() {
  console.log('pause timer')
  btn.textContent = 'resume'
  clearInterval(intervalID)
  isTimerRunning = false
}

function updateTimeDisplay() {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  timer.textContent = `${minutes}:${seconds}`
}

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.
