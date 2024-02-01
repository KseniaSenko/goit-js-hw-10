import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconClose from "../img/icon-close.svg";
import iconCheck from "../img/check.svg";

const formEl = document.querySelector('.form');
const stateRadios = document.getElementsByName('state');
let activeRadio;

for (const radio of stateRadios) {
    if (radio.checked) {
        activeRadio = radio;
    }
};

function createPtomise(activeRadio, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (activeRadio === 'fulfilled') {
            resolve(delay);
        }
        else {
            reject(delay);
        }
        }, delay)
    })
}
formEl.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event) {
    event.preventDefault();
    let delay = Number(event.currentTarget.delay.value);
    let stateValue = event.currentTarget.state.value;
    createPtomise(stateValue, delay)
        .then(() => {
            iziToast.success({
                id: 'errorMsg',
                title: 'OK',
                iconUrl: iconCheck,
                timeout: delay,
                message: `Fulfilled promise in ${delay}ms`,
                position: 'topRight',
                backgroundColor: '#59a10d',
            })
        })
        .catch(() => {
            iziToast.error({
                id: 'errorMsg',
                title: 'Error',
                iconUrl: iconClose,
                iconColor: 'white',
                timeout: delay,
                message: `Rejected promise in ${delay}ms`,
                position: 'topRight',
                backgroundColor: '#ef4040',
            
        })
    })
 }