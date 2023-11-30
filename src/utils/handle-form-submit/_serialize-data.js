export function serializeData(controlsArrayOrForm) {
  let data;
  if (Array.isArray(controlsArrayOrForm)) {
    data = new FormData();
    controlsArrayOrForm.forEach((control) => {
      data.append(control.name, control.value);
    });
    // for (let [key, value] of data) {
    //   console.log(`${key} - ${value}`);
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
