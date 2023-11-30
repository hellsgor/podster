import {isSuccess} from 'Utils/handle-form-submit/_isSuccess';
import {errorsProcessingFromResponse} from 'Utils/errors/_errors-processing-from-response';

export function registrationResponseProcessing(response, controlsArrayOrForm) {
  if (!isSuccess(response)) {
    errorsProcessingFromResponse(response, controlsArrayOrForm);
  } else {
    window.location.href = './registrationThanks.html';
  }
}
