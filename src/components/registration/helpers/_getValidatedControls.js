export function getValidatedControls() {
  return Array.from(document.querySelectorAll('[data-must-be-validated=true]'));
}
