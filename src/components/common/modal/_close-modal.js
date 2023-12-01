export function closeModal(eventOrElementID) {
  const modal = eventOrElementID.target
    ? eventOrElementID.target.closest('.modal')
    : document.getElementById(eventOrElementID);
  modal.classList.add('modal_fade');
  window.setTimeout(() => {
    modal.classList.add('modal_hidden');
    document.querySelector('body').style.overflow = 'auto';
  }, 300);
}
