const btn = document.getElementById('btn')
let timer = document.getElementById('timer')
let affirmation = document.getElementById('affirmation')

btn.addEventListener('click', startStopTimer)

let timeLeft = 900
let isTimerRunning = false
let intervalID = null

const music = new Audio('./satie.mp3')

function startStopTimer() {
  if (!isTimerRunning) {
    startTimer()
  } else {
    pauseTimer()
  }
}

function startTimer() {
  isTimerRunning = true
  btn.textContent = 'pause'
  music.play()
  intervalID = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--
      updateTimeDisplay()
    } else {
      endTimer()
    }
  }, 1000)
}

function pauseTimer() {
  music.pause()
  btn.textContent = 'resume'
  clearInterval(intervalID)
  isTimerRunning = false
}

function endTimer() {
  clearInterval(intervalID)
  isTimerRunning = false
  timeLeft = 900
  btn.textContent = 'restart'
  music.pause()
  music.currentTime = 0
}

function updateTimeDisplay() {
  let minutes = Math.floor(timeLeft / 60).toString()
  if (minutes.length < 2) minutes = `0${minutes}`

  let seconds = (timeLeft % 60).toString()
  if (seconds.length < 2) seconds = `0${seconds}`
  timer.textContent = `${minutes}:${seconds}`
}

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.
