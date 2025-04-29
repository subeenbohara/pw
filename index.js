let seconds = 0;
const timeSpan = document.getElementById('time');

setInterval(() => {
  seconds++;
  timeSpan.textContent = seconds;
}, 1000);
