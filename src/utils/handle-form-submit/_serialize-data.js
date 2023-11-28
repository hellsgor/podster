export function serializeData(controlsArrayOrForm) {
  let data;
  if (Array.isArray(controlsArrayOrForm)) {
    data = new FormData();
    controlsArrayOrForm.forEach((control) => {
      data.append(control.name, control.value);
    });
  }

  if (
    !Array.isArray(controlsArrayOrForm) &&
    !controlsArrayOrForm === null &&
    typeof controlsArrayOrForm === 'object'
  ) {
    data = new FormData(controlsArrayOrForm);
  }
  return data;
}
