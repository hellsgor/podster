export function rotateArrow(arrow) {
  if (arrow.classList.contains('form-select__arrow_rotated')) {
    arrow.classList.remove('form-select__arrow_rotated');
  } else {
    arrow.classList.add('form-select__arrow_rotated');
  }
}
