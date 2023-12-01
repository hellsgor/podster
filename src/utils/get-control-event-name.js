export function getControlEventName(control) {
  return control.tagName === 'INPUT'
    ? control.type !== 'checkbox'
      ? 'input'
      : 'change'
    : 'change';
}
