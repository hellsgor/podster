import {resetControlError} from 'Utils/errors/reset-control-error';
import {isRegistrationInnValid} from './_is-registration-inn-valid';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';

export function registrationValidation(control) {
  let isInnValid = false;

  resetControlError(control);
  if (
    control.name === REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_TYPE &&
    control
      .closest('form')
      .querySelector(
        `#${REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN}`
      )
      .value.trim()
  ) {
    isInnValid = isRegistrationInnValid(
      control
        .closest('form')
        .querySelector(
          `#${REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN}`
        ),
      REGISTRATION_IDS.REGISTRATION_CONTROLS
    );
  }

  if (control.name === REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN) {
    isInnValid = isRegistrationInnValid(
      control,
      REGISTRATION_IDS.REGISTRATION_CONTROLS
    );
  }
}
