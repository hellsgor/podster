export function numbersOnly(control) {
  control.value = control.value.replace(/[^0-9+]/g, '');
}
