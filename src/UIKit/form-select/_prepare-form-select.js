import {dropdownVisibility} from 'UIKit/form-select/_dropdown-visibility';
import {rotateSelectArrow} from 'UIKit/form-select/_rotate-select-arrow';

export function prepareFormSelect(selects) {
  selects.forEach((select) => {
    const dropdown = select.querySelector('.form-select__dropdown');
    const arrow = select.querySelector('.form-select__arrow');

    select
      .querySelector('button.form-select__select')
      .addEventListener('click', (event) => {
        event.preventDefault();
        dropdownVisibility(dropdown);
        rotateSelectArrow(arrow);
      });

    document.addEventListener('click', (event) => {
      if (!dropdown.classList.contains('visually-hidden')) {
        if (event.composedPath().includes(select) === false) {
          dropdownVisibility(dropdown);
          rotateSelectArrow(arrow);
        }
      }
    });
  });
}
