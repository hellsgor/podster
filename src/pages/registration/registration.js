import 'UIKit/index.js';
import 'Constants/index.js';
import 'Components/registration/buttons-modal/buttons-modal.js';
import 'Components/common/modal/modal.js';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';
import {addListenerForModal} from 'Components/registration/helpers/_addListenerForModal';
import {momentValidation} from 'Components/registration/helpers/validation/_momentValidation';
import {getValidatedControls} from 'Components/registration/helpers/_getValidatedControls';
import {numbersOnly} from 'Components/registration/helpers/masks/numbers-only';

addListenerForModal(
  REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_AGREEMENT_CONTRACT_BUTTON,
  REGISTRATION_IDS.REGISTRATION_MODALS.CONTRACT
);

addListenerForModal(
  REGISTRATION_IDS.REGISTRATION_CONTROLS
    .ADVERTISER_AGREEMENT_DATA_PROCESSING_BUTTON,
  REGISTRATION_IDS.REGISTRATION_MODALS.AGREEMENT
);

getValidatedControls().forEach((control) => {
  control.addEventListener(
    control.tagName === 'INPUT'
      ? control.type !== 'checkbox'
        ? 'input'
        : 'change'
      : 'change',
    (event) => {
      if (
        event.target.name ===
          REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN ||
        event.target.name ===
          REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_OGRN ||
        event.target.name ===
          REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_OKVED
      )
        numbersOnly(event.target);
      momentValidation(event, REGISTRATION_IDS.REGISTRATION_CONTROLS);
    }
  );
});
