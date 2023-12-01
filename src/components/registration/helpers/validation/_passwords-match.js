import {COMMON_CONSTANTS, REGISTRATION_IDS} from 'Constants/names-and-ids';
import {resetControlError} from 'Utils/errors/reset-control-error';
import {showControlError} from 'Utils/errors/showControlError';
import {ERRORS} from 'Constants/errors';

export function passwordsMatch(
  passwordCont = undefined,
  repeatedCont = undefined
) {
  let passwordControl = passwordCont
    ? passwordCont
    : document.getElementById(
        REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_PASSWORD
      );
  let passwordRepeatedControl = repeatedCont
    ? repeatedCont
    : document.getElementById(
        REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_PASSWORD_REPEATED
      );
  resetControlError(passwordRepeatedControl);
  if (
    passwordControl.value.length >= COMMON_CONSTANTS.MIN_PASSWORD_LENGTH &&
    passwordRepeatedControl.value.length >= COMMON_CONSTANTS.MIN_PASSWORD_LENGTH
  ) {
    if (passwordRepeatedControl.value !== passwordControl.value) {
      passwordRepeatedControl.dataset.verificated = false;
      showControlError(passwordRepeatedControl, ERRORS.EC003());
    } else if (
      passwordControl.dataset.verificated === 'true' &&
      passwordRepeatedControl.value === passwordControl.value
    ) {
      passwordRepeatedControl.dataset.verificated = true;
    }
  }
}
