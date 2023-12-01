import {validatedControlsCheck} from 'Components/registration/helpers/_validated-controls-check';

export function makeRegistrationButtonDisabled(validatedControls, button) {
  if (validatedControlsCheck(validatedControls)) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}
