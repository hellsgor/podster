import {closeModal} from 'Components/common/modal/_close-modal';
import {COMMON_IDS} from 'Constants/names-and-ids';

document.querySelectorAll('.modal').forEach((modal) => {
  if (modal.querySelector(`#${COMMON_IDS.MODAL_CLOSE_BUTTON}`))
    modal
      .querySelector(`#${COMMON_IDS.MODAL_CLOSE_BUTTON}`)
      .addEventListener('click', closeModal);
});
