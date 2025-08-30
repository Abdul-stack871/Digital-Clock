const dateEl = document.getElementById('date-display');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

const hourLabel = document.getElementById('hour-label');
const minuteLabel = document.getElementById('minute-label');
const secondLabel = document.getElementById('second-label');

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function updateClock() {
  const now = new Date();

  const d = now.getDate();
  const m = now.getMonth();
  const y = now.getFullYear();

  const h = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  dateEl.innerHTML = `${d} ${monthNames[m]} ${y}`;

  hourEl.textContent = String(h).padStart(2, '0');
  minuteEl.textContent = String(min).padStart(2, '0');
  secondEl.textContent = String(sec).padStart(2, '0');

  hourLabel.textContent = h === 1 ? 'Hour' : 'Hours';
  minuteLabel.textContent = min === 1 ? 'Minute' : 'Minutes';
  secondLabel.textContent = sec === 1 ? 'Second' : 'Seconds';
}

updateClock();
setInterval(updateClock, 1000);
