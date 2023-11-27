import {USER_REG_TYPES} from 'Constants/user-reg-types';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';

export function setHiddenControlsLabels(controlValue) {
  let basicUserTypeObject;

  if (controlValue === USER_REG_TYPES.LEGAL_PERSON.VALUE) {
    basicUserTypeObject = USER_REG_TYPES.LEGAL_PERSON;
  } else if (controlValue === USER_REG_TYPES.INDIVIDUAL_ENTREPRENEUR.VALUE) {
    basicUserTypeObject = USER_REG_TYPES.INDIVIDUAL_ENTREPRENEUR;
  }

  setLabel(
    REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_NAME,
    basicUserTypeObject
  );
  setLabel(
    REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_OGRN,
    basicUserTypeObject
  );
}

function setLabel(controlID, basicUserTypeObject) {
  document
    .getElementById(controlID)
    .closest('.form-control')
    .querySelector('label').textContent =
    basicUserTypeObject.CONTROLS_LABELS[controlID];
}
