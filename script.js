// Live Clock Function
function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById('current-time').innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Stopwatch Variables
let stopwatchDisplay = document.getElementById("stopwatch");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let seconds = 0, minutes = 0, hours = 0;
let timer = null;

// Function to update stopwatch display
function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let formattedTime =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
    
    stopwatchDisplay.innerText = formattedTime;
}

// Start Stopwatch
startBtn.addEventListener("click", function () {
    if (!timer) {
        timer = setInterval(updateStopwatch, 1000);
    }
});

// Stop Stopwatch
stopBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

// Reset Stopwatch
resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    stopwatchDisplay.innerText = "00:00:00";
});
