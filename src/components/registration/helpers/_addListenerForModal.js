import {showModal} from 'Components/common/modal/_show-modal';

export function addListenerForModal(buttonID, modalID) {
  document.getElementById(buttonID).addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('body').style.overflow = 'hidden';
    showModal(modalID);
  });
}
