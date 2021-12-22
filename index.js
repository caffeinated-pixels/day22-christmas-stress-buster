const btn = document.getElementById('btn')
let timer = document.getElementById('timer')
let affirmation = document.getElementById('affirmation')

btn.addEventListener('click', startStopTimer)

let timeLeft = 900
let isTimerRunning = false
let intervalID = null

function startStopTimer() {
  if (!isTimerRunning) {
    console.log('start timer')
    intervalID = setInterval(() => {
      timeLeft--
      console.log(timeLeft)
    }, 1000)
    isTimerRunning = true
  } else {
    console.log('pause timer')
    clearInterval(intervalID)
    isTimerRunning = false
  }
}

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.
