import {isSuccess} from 'Utils/handle-form-submit/_isSuccess';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';
import {USER_REG_TYPES} from 'Constants/user-reg-types';

export function innResponseProcessing(response) {
  if (isSuccess(response)) {
    const innControl = document.getElementById(
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN
    );
    innControl.dataset.verificated = true;
    if (innControl.hasAttribute('readonly'))
      innControl.removeAttribute('readonly');
    if (
      document.getElementById(
        REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_TYPE
      ).value !== USER_REG_TYPES.NATURAL_PERSON.VALUE
    ) {
      addControlValue(
        REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_NAME,
        response
      );
      addControlValue(
        REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_OGRN,
        response
      );
      addControlValue(
        REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_OKVED,
        response
      );
      document
        .getElementById(
          REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_BACK_DATA_BLOCK
        )
        .classList.remove('visually-hidden');
    }
  }
}

function addControlValue(controlID, response) {
  const control = document.getElementById(controlID);
  control.value = response[controlID];
  control.dataset.verificated = true;
}
