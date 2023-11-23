import {closeModal} from 'Components/common/modal/_close-modal';
import {removeDisabledAttr} from 'Components/common/modal/_remove-disabled-attr';
import {acceptDocument} from 'Components/registration/buttons-modal/_accept-document';

const registrationModals = document.querySelectorAll('.registration__modal');

registrationModals.forEach((modal) => {
  modal.querySelector('#cancel-button').addEventListener('click', closeModal);

  modal
    .querySelector('#overflow-block')
    .addEventListener('scroll', removeDisabledAttr);

  modal
    .querySelector('#accept-button')
    .addEventListener('click', acceptDocument);
});
