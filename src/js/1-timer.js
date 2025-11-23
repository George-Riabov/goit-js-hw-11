import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hourValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let timerId = null;
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date();
    const selectedDate = selectedDates[0];

    if (selectedDate <= now) {
      startBtn.disabled = true;

      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        timeout: 3000,
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        pauseOnHover: true,
        transitionIn: 'fadeInDown',
        transitionOut: 'fadeOutUp',
        layout: 2,
        drag: true,
      });

      return;
    }

    userSelectedDate = selectedDate;
    startBtn.disabled = false;
  },
};

flatpickr(input, options);
startBtn.addEventListener('click', onStartClick);

function onStartClick() {
  if (!userSelectedDate) return;

  startBtn.disabled = true;
  input.disabled = true;

  updateTimer();
  timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const now = new Date();
  const diff = userSelectedDate - now;

  if (diff <= 0) {
    clearInterval(timerId);

    daysValue.textContent = '00';
    hourValue.textContent = '00';
    minutesValue.textContent = '00';
    secondsValue.textContent = '00';

    input.disabled = false;

    return;
  }

  const { days, hours, minutes, seconds } = convertMs(diff);

  daysValue.textContent = addLeadingZero(days);
  hourValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
