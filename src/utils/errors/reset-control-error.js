import {getControlParent} from 'Utils/errors/_getControlParent';

export function resetControlError(control) {
  const controlParent = getControlParent(control);
  
  controlParent.classList.remove('form-control_with-error');

  if (controlParent.querySelector('span.error')) {
    controlParent.querySelector('span.error').textContent = '';
  }
}
