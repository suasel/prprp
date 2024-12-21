let timerInterval; // Interval for the timer
let isBreak = false; // Flag to check if it's break time
let studySeconds = 1500; // Default study time (25 minutes)
let breakSeconds = 300; // Default break time (5 minutes)
let timerSeconds = studySeconds;

const timerDisplay = document.getElementById('timer');
const startTimerBtn = document.getElementById('startTimer');
const pauseTimerBtn = document.getElementById('pauseTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const setPomodoroBtn = document.getElementById('setPomodoro');
const studyInput = document.getElementById('studyTime');
const breakInput = document.getElementById('breakTime');

function updateTimer() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    
     timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
     if (timerInterval) return;

     timerInterval = setInterval(() => {
         if (timerSeconds > 0) {
             timerSeconds--;
             updateTimer();
         } else {
             clearInterval(timerInterval);
             timerInterval = null;

             if (isBreak) {
                 alert('Break is over! Back to work!');
                 timerSeconds = studySeconds;
                 isBreak = false;
             } else {
                 alert('Time to take a break!');
                 timerSeconds = breakSeconds;
                 isBreak = true;
             }
             startTimer();
         }
     }, 1000);
}

function pauseTimer() {
     clearInterval(timerInterval);
     timerInterval = null;
}

function resetTimer() {
     clearInterval(timerInterval);
     timerInterval = null;
     timerSeconds = studySeconds;
     isBreak = false;

     updateTimer();
}

function setPomodoro() {
     const studyTime = parseInt(studyInput.value);
     const breakTime = parseInt(breakInput.value);

     if (!isNaN(studyTime) && !isNaN(breakTime) && studyTime > 0 && breakTime > 0) {
         studySeconds = studyTime * 60;
         breakSeconds = breakTime * 60;

         timerSeconds = studySeconds;
         isBreak = false;

         updateTimer();
     } else {
         alert('Please enter valid times for study and break sessions.');
     }
}

// Event listeners for buttons
startTimerBtn.addEventListener('click', startTimer);
pauseTimerBtn.addEventListener('click', pauseTimer);
resetTimerBtn.addEventListener('click', resetTimer);
setPomodoroBtn.addEventListener('click', setPomodoro);

// Initial timer update
updateTimer();
