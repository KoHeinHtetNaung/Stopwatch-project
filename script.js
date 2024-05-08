
// const stopwatch = document.getElementsByClassName("watch")[0];
// const startButton = document.getElementsByClassName("start")[0];
// const pauseButton = document.getElementsByClassName("pause")[0];
// const continueButton = document.getElementsByClassName("continue")[0];
// const restartButton = document.getElementsByClassName("restart")[0];

// let seconds = 0, minutes = 0, hours = 0;

// const startTime = () => {
//     seconds += 1
//     if (seconds === 60) {
//         seconds = 0;
//         minutes += 1;

//         if (minutes === 60) {
//             minutes = 0;
//             hours += 1;
//         }
//     }
//     // ternary operator  
//     // short of if else
//     const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds
//     const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes
//     const hoursText = hours < 10 ? "0" + hours.toString() : hours
//     stopwatch.textContent = hoursText + ":" + minutesText + ":" + secondsText

//     const secondText = seconds < 10 ? "0" + seconds.toString() : seconds
//     const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes
//     const hourText = hours < 10 ? "0" + hours.toString() : hours
//     stopwatch.textContent = hourText + ":" + minuteText + ":" + secondText
// };

// let intervalId;
// startButton.addEventListener("click", () => {
//     intervalId = setInterval(startTime, 1000)
// });

// pauseButton.addEventListener("click", () => {
//     clearInterval(intervalId)
// });

// continueButton.addEventListener("click", () => {
//     clearInterval(intervalId)
//     intervalId = setInterval(startTime, 1000)
// })

// restartButton.addEventListener("click", () => {
//     clearInterval(intervalId)
//     seconds = 0, minutes = 0, hours = 0;
//     intervalId = setInterval(startTime, 1000)
// })


const stopwatch = document.getElementsByClassName("watch")[0];
const startButton = document.getElementsByClassName("start")[0];
const pauseButton = document.getElementsByClassName("pause")[0];
const continueButton = document.getElementsByClassName("continue")[0];
const restartButton = document.getElementsByClassName("restart")[0];

let seconds = 0, minutes = 0, hours = 0;

const startTime = () => {
    seconds += 1
    if (seconds === 60) {
        seconds = 0
        minutes += 1
        if (minutes === 60) {
            minutes = 0
            hours += 1
        }
    }
    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds
    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes
    const hoursText = hours < 10 ? "0" + hours.toString() : hours
    stopwatch.textContent = hoursText + ":" + minutesText + ":" + secondsText
}

let intervalId;
startButton.addEventListener("click", () => {
    intervalId = setInterval(startTime, 1000)
});

pauseButton.addEventListener("click", () => {
    clearInterval(intervalId);
});

continueButton.addEventListener("click", () => {
    clearInterval(intervalId)
    intervalId = setInterval(startTime, 1000)
})
 
restartButton.addEventListener("click", () => {
    clearInterval(intervalId)
    seconds = 0, minutes = 0, hours = 0
    intervalId = setInterval(startTime, 1000)
});
