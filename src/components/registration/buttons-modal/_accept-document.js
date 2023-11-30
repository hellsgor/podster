import {closeModal} from 'Components/common/modal/_close-modal';

export function acceptDocument(event) {
  const modal = event.target.closest('.modal');
  const thisCheckbox = document.querySelector(
    `input[data-modal-id="${modal.id}"]`
  );
  thisCheckbox.checked = true;
  thisCheckbox.dataset.verificated = true;
  thisCheckbox.dispatchEvent(new Event('change'));
  closeModal(modal.id);
}
