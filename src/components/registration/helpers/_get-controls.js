import {getValidatedControls} from 'Components/registration/helpers/_getValidatedControls';
import {REGISTRATION_IDS} from 'Constants/names-and-ids';

export function getControls() {
  const validatedControls = getValidatedControls();
  const debounceControls = (() => {
    const controlIds = [
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN,
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_EMAIL,
    ];
    return controlIds.map((id) => document.getElementById(id));
  })();

  const noDebounceControls = [...validatedControls].filter((control) => {
    const excludedIds = [
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_INN,
      REGISTRATION_IDS.REGISTRATION_CONTROLS.ADVERTISER_EMAIL,
    ];
    return !excludedIds.includes(control.name) && control;
  });

  return {validatedControls, debounceControls, noDebounceControls};
}
