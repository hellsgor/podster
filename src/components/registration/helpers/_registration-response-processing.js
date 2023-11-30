import {isSuccess} from 'Utils/handle-form-submit/_isSuccess';

export function registrationResponseProcessing(response) {
  console.log('reg ok');
  console.log(response);

  if (isSuccess(response)) {
    window.location.href = './registrationThanks.html';
  }
}
