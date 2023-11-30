import 'UIKit/index.js';
import 'Constants/index.js';
import 'Components/registration/buttons-modal/buttons-modal.js';
import 'Components/common/modal/modal.js';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';
import {addListenerForModal} from 'Components/registration/helpers/_addListenerForModal';
import {momentValidation} from 'Components/registration/helpers/validation/_momentValidation';
import {getValidatedControls} from 'Components/registration/helpers/_getValidatedControls';
import {numbersOnly} from 'Utils/masks/numbers-only';
import {registrationValidation} from 'Components/registration/helpers/validation/_registration-validation';
import {validatedControlsCheck} from 'Components/registration/helpers/_validated-controls-check';
import {handleFormSubmit} from 'Utils/handle-form-submit/handle-form-submit';
import {registrationResponseProcessing} from 'Components/registration/helpers/_registration-response-processing';

const validatedControls = getValidatedControls();
const registrationSubmitButton = document.getElementById(
  REGISTRATION_IDS.REGISTRATION_FORM_SUBMIT_BUTTON
);
let isControlsTouched = false;

addListenerForModal(
  REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_AGREEMENT_CONTRACT_BUTTON,
  REGISTRATION_IDS.REGISTRATION_MODALS.CONTRACT
);

addListenerForModal(
  REGISTRATION_IDS.REGISTRATION_CONTROLS
    .ADVERTISER_AGREEMENT_DATA_PROCESSING_BUTTON,
  REGISTRATION_IDS.REGISTRATION_MODALS.AGREEMENT
);

validatedControls.forEach((control) => {
  control.addEventListener(
    control.tagName === 'INPUT'
      ? control.type !== 'checkbox'
        ? 'input'
        : 'change'
      : 'change',
    (event) => {
      isControlsTouched = true;
      if (
        event.target.name ===
          REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN ||
        event.target.name ===
          REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_OGRN ||
        event.target.name ===
          REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_OKVED
      ) {
        numbersOnly(event.target);
      }
      momentValidation(event, registrationValidation);
      if (validatedControlsCheck(validatedControls) && isControlsTouched) {
        registrationSubmitButton.removeAttribute('disabled');
      } else {
        registrationSubmitButton.setAttribute('disabled', '');
      }
    }
  );
});

registrationSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  handleFormSubmit(
    validatedControls,
    './moc/registration-response-success.json',
    // './moc/registration-response-error.json',
    registrationResponseProcessing
  );
});
