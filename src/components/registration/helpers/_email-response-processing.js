import {isSuccess} from 'Utils/handle-form-submit/_isSuccess';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';
import {errorsProcessingFromResponse} from 'Utils/errors/_errors-processing-from-response';

export function emailResponseProcessing(response, controlsArrayOrForm) {
  if (!isSuccess(response)) {
    errorsProcessingFromResponse(response, controlsArrayOrForm);
  } else {
    const emailControl = controlsArrayOrForm.find(
      (control) =>
        control.name === REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_EMAIL
    );
    if (emailControl) {
      emailControl.dataset.verificated = true;
      emailControl.removeAttribute('readonly');
    }
  }
}
