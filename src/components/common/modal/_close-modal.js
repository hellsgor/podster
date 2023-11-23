export function closeModal(event) {
  const modal = event.target.closest('.modal');
  modal.classList.add('modal_fade');
  window.setTimeout(() => {
    modal.classList.add('modal_hidden');
  }, 300);
}
