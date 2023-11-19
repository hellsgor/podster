import {dropdownVisibility} from 'UIKit/form-select/_dropdown-visibility';
import {rotateSelectArrow} from 'UIKit/form-select/_rotate-select-arrow';

export function changeSelect(event, select, dropdownChecks, dropdown, arrow) {
  select.querySelectorAll('select option').forEach((option) => {
    if (option.hasAttribute('selected')) {
      option.removeAttribute('selected');
    }
    if (option.value === event.target.dataset.optionValue) {
      option.setAttribute('selected', '');
    }
  });

  dropdownChecks.forEach((dropdownCheck) => {
    if (dropdownCheck.querySelector('input[type=checkbox]') !== event.target) {
      dropdownCheck.querySelector('input[type=checkbox]').checked = false;
    }
  });
  setTimeout(() => {
    dropdownVisibility(dropdown);
    rotateSelectArrow(arrow);
  }, 150);
}
