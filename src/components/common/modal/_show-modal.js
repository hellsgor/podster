export function showModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.remove('modal_hidden', 'modal_fade');
}
