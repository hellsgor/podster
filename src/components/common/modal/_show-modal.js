export function showModal(modalID) {
  document.querySelector('body').style.overflow = 'hidden';
  document
    .getElementById(modalID)
    .classList.remove('modal_hidden', 'modal_fade');
}
