export function validatedControlsCheck(validatedControls) {
  let isVerificationFlag = true;
  Array.from(validatedControls)
    .filter((control) => control.tagName !== 'SELECT')
    .forEach((control) => {
      if (!control.dataset.verificated) {
        isVerificationFlag = false;
      }
    });
  return isVerificationFlag;
}
