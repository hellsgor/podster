import {getControlParent} from 'Utils/errors/_getControlParent';
import {ERRORS} from 'Constants/errors';

export function showControlError(control, errorTextFunc = undefined) {
  const controlParent = getControlParent(control);

  if (controlParent.querySelector('span.error')) {
    if (!controlParent.classList.contains('form-control_with-error')) {
      controlParent.querySelector('span.error').textContent = errorTextFunc
        ? errorTextFunc
        : ERRORS.EC000;
      controlParent.classList.add('form-control_with-error');
    } else {
      controlParent.querySelector('span.error').textContent = '';
      controlParent.classList.remove('form-control_with-error');
    }
  }
}
