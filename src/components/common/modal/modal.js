import {closeModal} from 'Components/common/modal/_close-modal';

document.querySelectorAll('.modal').forEach((modal) => {
  if (modal.querySelector('#modal-close-button'))
    modal
      .querySelector('#modal-close-button')
      .addEventListener('click', closeModal);
});
