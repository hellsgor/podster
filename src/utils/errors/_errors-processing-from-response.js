import {showControlError} from 'Utils/errors/showControlError';
import {ERRORS} from 'Constants/errors';

export function errorsProcessingFromResponse(response, controlsArrayOrForm) {
  if (Array.isArray(controlsArrayOrForm)) {
    controlsArrayOrForm.forEach((control) => {
      response['error-info'].forEach((controlError) => {
        if (controlError['control-name'] === control.name) {
          control.dataset.verificated = false;
          showControlError(
            control,
            controlError['control-name'] === control.name
              ? controlError['error-text']
              : ERRORS.EC000()
          );
        }
      });
    });
  }
}
