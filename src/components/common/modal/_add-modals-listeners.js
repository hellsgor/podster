import {showModal} from 'Components/common/modal/_show-modal';

/**
 * addModalsListeners
 * @description добавляет слушатель события вызова модального окна
 * @param {array} modalsELemArray - массив объектов, где каждый объект "принадлежит" одному модальному окну
 * @param {string} buttonID - id элемента на котором слушать событие
 * @param {string} modalID - id модального окна которое нужно вызвать событии на buttonID
 * */

export function addModalsListeners(modalsELemArray) {
  modalsELemArray.forEach(({buttonID, modalID}) => {
    document.getElementById(buttonID).addEventListener('click', (event) => {
      event.preventDefault();
      showModal(modalID);
    });
  });
}
