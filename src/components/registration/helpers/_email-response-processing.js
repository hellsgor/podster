import {isSuccess} from 'Utils/handle-form-submit/_isSuccess';
import {showControlError} from 'Utils/errors/showControlError';
import {ERRORS} from 'Constants/errors';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';

export function emailResponseProcessing(response, controlsArrayOrForm) {
  if (!isSuccess(response)) {
    if (Array.isArray(controlsArrayOrForm)) {
      controlsArrayOrForm.forEach((control, idx) => {
        control.dataset.verificated = false;
        showControlError(
          control,
          response['error-info'][idx]['control-name'] === control.name
            ? response['error-info'][idx]['error-text']
            : ERRORS.EC000()
        );
      });
    }
  } else {
    const emailControl = controlsArrayOrForm.find(
      (control) =>
        control.name === REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_EMAIL
    );
    if (emailControl) {
      emailControl.dataset.verificated = true;
    }
  }
}
