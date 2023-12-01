export function numbersOnly(event, targetControlsNames) {
  if (targetControlsNames.includes(event.target.name)) {
    event.target.value = event.target.value.replace(/[^0-9+]/g, '');
  }
}
