import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { delay, state } = event.currentTarget.elements;
  const delayValue = Number(delay.value);
  const stateValue = state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    }, delayValue);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
        close: true,
        closeOnClick: true,
        closeOnEscape: true,
        progressBar: true,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
        close: true,
        closeOnClick: true,
        closeOnEscape: true,
        progressBar: true,
      });
    });
}

console.log('Перепрошую за стилі, не вистачило часу, до дедлайну');
