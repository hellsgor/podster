import {closeModal} from 'Components/common/modal/_close-modal';
import {removeDisabledAttr} from 'Components/common/modal/_remove-disabled-attr';

const registrationModals = document.querySelectorAll('.registration__modal');

registrationModals.forEach((modal) => {
  modal.querySelector('#cancel-button').addEventListener('click', closeModal);

  modal
    .querySelector('#overflow-block')
    .addEventListener('scroll', removeDisabledAttr);
});
