import 'UIKit/index.js';
import 'Constants/index.js';
import 'Components/registration/buttons-modal/buttons-modal.js';
import 'Components/common/modal/modal.js';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';
import {numbersOnly} from 'Utils/masks/numbers-only';
import {registrationValidation} from 'Components/registration/helpers/validation/_registration-validation';
import {handleFormSubmit} from 'Utils/handle-form-submit/handle-form-submit';
import {registrationResponseProcessing} from 'Components/registration/helpers/_registration-response-processing';
import {getControlEventName} from 'Utils/get-control-event-name';
import {getControls} from 'Components/registration/helpers/_get-controls';
import {makeRegistrationButtonDisabled} from 'Components/registration/helpers/_make-registration-button-disabled';
import {addModalsListeners} from 'Components/common/modal/_add-modals-listeners';

const controls = getControls();
const registrationSubmitButton = document.getElementById(
  REGISTRATION_IDS.REGISTRATION_FORM_SUBMIT_BUTTON
);

addModalsListeners([
  {
    buttonID:
      REGISTRATION_IDS.REGISTRATION_CONTROLS
        .ADVERTISER_AGREEMENT_CONTRACT_BUTTON,
    modalID: REGISTRATION_IDS.REGISTRATION_MODALS.CONTRACT,
  },
  {
    buttonID:
      REGISTRATION_IDS.REGISTRATION_CONTROLS
        .ADVERTISER_AGREEMENT_DATA_PROCESSING_BUTTON,
    modalID: REGISTRATION_IDS.REGISTRATION_MODALS.AGREEMENT,
  },
]);
controls.validatedControls.forEach((control) => {
  control.addEventListener(getControlEventName(control), (event) => {
    numbersOnly(event, [
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN,
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_OGRN,
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_OKVED,
    ]);

    registrationValidation(event.target);

    makeRegistrationButtonDisabled(
      controls.validatedControls,
      registrationSubmitButton
    );
  });
});

registrationSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  handleFormSubmit(
    controls.validatedControls,
    './moc/registration-response-success.json',
    // './moc/registration-response-error.json',
    registrationResponseProcessing
  );
});
