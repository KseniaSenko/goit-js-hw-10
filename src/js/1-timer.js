import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iconClose from "../img/icon-close.svg";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const Refs = {
  datetimePicker: document.querySelector('.timer-input'),
  btn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}
const {datetimePicker, btn, days, hours, minutes, seconds } = Refs;

let userSelectedDate;

btn.disabled = true;
btn.classList.add('disabled');

const options = {
  locale: {
    firstDayOfWeek: 1,
     weekdays: {
      shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
  },
  dateFormat: 'Y-m-d H:i',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0].getTime() <= new Date()) {
        iziToast.error({
          id: 'errorMsg',
          iconUrl: iconClose,
          iconColor: 'white',
          message: 'Please choose a date in the future',
          timeout: 3000,
          position: 'topRight',
          backgroundColor: '#ef4040',
          progressBarColor: '#b51b1b',
          })
        btn.disabled = true;
        
      } else {
          btn.disabled = false;
          userSelectedDate = selectedDates[0].getTime();   
      }
  },
};
flatpickr(datetimePicker, options);

btn.addEventListener('click', onBtnClick);


function onBtnClick() {
  const intervalId = setInterval(() => {
    const deltaTime = userSelectedDate - new Date();
    const time = convertMs(deltaTime);

    if (deltaTime <= 0) {
      clearInterval(intervalId);
      btn.disabled = false;
      datetimePicker.disabled = false;
      return;
    }
    btn.disabled = true;
    datetimePicker.disabled = true;

    days.textContent = addLeadingZero(time.days);
    hours.textContent = addLeadingZero(time.hours);
    minutes.textContent = addLeadingZero(time.minutes);
    seconds.textContent = addLeadingZero(time.seconds);
    
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}