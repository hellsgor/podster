import {closeModal} from 'Components/common/modal/_close-modal';

export function acceptDocument(event) {
  const modal = event.target.closest('.modal');

  document.querySelector(`input[data-modal-id="${modal.id}"]`).checked = true;
  closeModal(modal.id);
}
