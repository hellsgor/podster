import 'UIKit/index.js';
import 'Constants/index.js';
import 'Components/registration/buttons-modal/buttons-modal.js';
import 'Components/common/modal/modal.js';
import {showModal} from 'Components/common/modal/_show-modal';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';

const agreementContractButton = document.getElementById(
  REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_AGREEMENT_CONTRACT_BUTTON
);

agreementContractButton.addEventListener('click', (event) => {
  event.preventDefault();
  showModal(REGISTRATION_IDS.REGISTRATION_MODALS.CONTRACT_MODAL);
});
