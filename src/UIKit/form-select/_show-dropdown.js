export function showDropdown(dropdown, arrow) {
  if (dropdown.classList.contains('visually-hidden')) {
    dropdown.classList.remove('visually-hidden');
  } else {
    dropdown.classList.add('visually-hidden');
  }

  if (arrow.classList.contains('form-select__arrow_rotated')) {
    arrow.classList.remove('form-select__arrow_rotated');
  } else {
    arrow.classList.add('form-select__arrow_rotated');
  }
}
