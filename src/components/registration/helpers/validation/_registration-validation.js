import {resetControlError} from 'Utils/errors/reset-control-error';
import {isRegistrationInnValid} from './_is-registration-inn-valid';
import {COMMON_CONSTANTS, REGISTRATION_IDS} from 'Constants/names-and-ids';
import {handleFormSubmit} from 'Utils/handle-form-submit/handle-form-submit';
import {innResponseProcessing} from 'Components/registration/helpers/_inn-response-processing';
import {setHiddenControlsLabels} from 'Components/registration/helpers/_set-hidden-controls-labels';
import {USER_REG_TYPES} from 'Constants/user-reg-types';
import {REG_EXPS} from 'Constants/reg-exps';
import {showControlError} from 'Utils/errors/showControlError';
import {ERRORS} from 'Constants/errors';
import {emailResponseProcessing} from 'Components/registration/helpers/_email-response-processing';
import {passwordsMatch} from 'Components/registration/helpers/validation/_passwords-match';

export function registrationValidation(control) {
  let isInnValid = false;

  resetControlError(control);
  if (control.name === REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_TYPE) {
    document.getElementById(
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN
    ).dataset.verificated = false;
    resetBackUserDataControlsValues();
    setHiddenControlsLabels(control.value);
    if (control.value === USER_REG_TYPES.NATURAL_PERSON.VALUE) {
      document
        .getElementById(
          REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_BACK_DATA_BLOCK
        )
        .classList.add('visually-hidden');
    }
    if (
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
  }

  if (control.name === REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN) {
    control.dataset.verificated = false;
    isInnValid = isRegistrationInnValid(
      control,
      REGISTRATION_IDS.REGISTRATION_CONTROLS
    );
    if (isInnValid) {
      control.setAttribute('readonly', '');
      handleFormSubmit(
        [control],
        './moc/inn-response-data-success.json',
        innResponseProcessing
      );
    } else {
      resetBackUserDataControlsValues();
    }
  }

  if (
    control.name === REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_EMAIL
  ) {
    resetControlError(control);
    if (control.value.length >= 7) {
      if (!REG_EXPS.EMAIL.test(control.value.toLowerCase().trim())) {
        showControlError(control, ERRORS.EC001());
      } else {
        handleFormSubmit(
          [control],
          './moc/email-response-data-success.json',
          emailResponseProcessing
        );
      }
    }
  }

  if (
    control.name === REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_PASSWORD
  ) {
    resetControlError(control);
    if (control.value.length >= COMMON_CONSTANTS.MIN_PASSWORD_LENGTH) {
      if (!REG_EXPS.PASSWORD.test(control.value)) {
        showControlError(control, ERRORS.EC001());
      }
      passwordsMatch();
    }
  }

  if (
    control.name ===
    REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_PASSWORD_REPEATED
  ) {
    resetControlError(control);
    if (control.value.length >= COMMON_CONSTANTS.MIN_PASSWORD_LENGTH) {
      passwordsMatch();
    }
  }
}

function resetBackUserDataControlsValues() {
  document
    .getElementById(
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_BACK_DATA_BLOCK
    )
    .querySelectorAll('input')
    .forEach((control) => {
      control.value = '';
    });
}
