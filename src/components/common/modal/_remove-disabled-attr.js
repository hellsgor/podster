export function removeDisabledAttr(event) {
  const modalBody = event.target.closest('.modal__body');
  const overflowBlock = modalBody.querySelector('#overflow-block');
  const scrollingBlock = modalBody.querySelector('#scrolling-block');
  const acceptButton = modalBody.querySelector('#accept-button');
  if (
    scrollingBlock.scrollHeight - overflowBlock.offsetHeight ===
    overflowBlock.scrollTop
  ) {
    acceptButton.disabled = false;
    overflowBlock.removeEventListener('scroll', removeDisabledAttr);
  }
}
