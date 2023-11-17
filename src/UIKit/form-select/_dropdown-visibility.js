export function dropdownVisibility(dropdown) {
  if (dropdown.classList.contains('visually-hidden')) {
    dropdown.classList.remove('visually-hidden');
  } else {
    dropdown.classList.add('visually-hidden');
  }
}
