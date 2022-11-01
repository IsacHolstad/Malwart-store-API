import { USER_SIGN_UP } from '../api-library/api-endpoints.js';

console.log(USER_SIGN_UP);

const signUpBtn = document.querySelector('#submit-button');

document
  .getElementById('submit-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
  });
