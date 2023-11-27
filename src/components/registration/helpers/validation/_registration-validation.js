import {resetControlError} from 'Utils/errors/reset-control-error';
import {isRegistrationInnValid} from './_is-registration-inn-valid';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';
import {handleFormSubmit} from 'Utils/handle-form-submit/handle-form-submit';
import {innResponseProcessing} from 'Components/registration/helpers/_inn-response-processing';
import {setHiddenControlsLabels} from 'Components/registration/helpers/_set-hidden-controls-labels';
import {USER_REG_TYPES} from 'Constants/user-reg-types';

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
