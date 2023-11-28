import {rotateArrow} from 'UIKit/form-select/_rotate-arrow';

export function showDropdown(dropdown, arrow) {
  if (dropdown.classList.contains('visually-hidden')) {
    dropdown.classList.remove('visually-hidden');
  } else {
    dropdown.classList.add('visually-hidden');
  }
  rotateArrow(arrow);
}
