import {isSuccess} from 'Utils/handle-form-submit/_isSuccess';
import {showControlError} from 'Utils/errors/showControlError';
import {ERRORS} from 'Constants/errors';

export function emailResponseProcessing(response, controlsArrayOrForm) {
  if (!isSuccess(response)) {
    if (Array.isArray(controlsArrayOrForm)) {
      controlsArrayOrForm.forEach((control, idx) => {
        showControlError(
          control,
          response['error-info'][idx]['control-name'] === control.name
            ? response['error-info'][idx]['error-text']
            : ERRORS.EC000()
        );
      });
    }
  }
}
