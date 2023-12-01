export function serializeData(controlsArrayOrForm) {
  let data;
  if (Array.isArray(controlsArrayOrForm)) {
    data = new FormData();
    controlsArrayOrForm.forEach((control) => {
      control.setAttribute('readonly', '');
      data.append(control.name, control.value);
    });
    // for (let [key, value] of data) {
    //   console.log(`serializeData: ${key} - ${value}`);
    // }
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
