import 'UIKit/index.js';
import 'Constants/index.js';
import 'Components/registration/buttons-modal/buttons-modal.js';
import 'Components/common/modal/modal.js';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';
import {addListenerForModal} from 'Components/registration/helpers/_addListenerForModal';

addListenerForModal(
  REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_AGREEMENT_CONTRACT_BUTTON,
  REGISTRATION_IDS.REGISTRATION_MODALS.CONTRACT
);

addListenerForModal(
  REGISTRATION_IDS.REGISTRATION_CONTROLS
    .ADVERTISER_AGREEMENT_DATA_PROCESSING_BUTTON,
  REGISTRATION_IDS.REGISTRATION_MODALS.AGREEMENT
);
