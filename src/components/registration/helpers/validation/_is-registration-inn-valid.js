import {getInnRegExp} from './_get-inn-reg-exp';
import {showControlError} from 'Utils/errors/showControlError';
import {ERRORS} from 'Constants/errors';
import {getControlLabelText} from 'Utils/errors/_getControlLableText';
import {resetControlError} from 'Utils/errors/reset-control-error';

export function isRegistrationInnValid(control, controlsNamespace) {
  resetControlError(control);
  const value = control.value.trim();
  const advertiserTypeControl = control
    .closest('form')
    .querySelector(`#${controlsNamespace.ADVERTISER_TYPE}`);
  if (value.length >= 10) {
    if (advertiserTypeControl.value) {
      if (!getInnRegExp(advertiserTypeControl.value).test(value)) {
        showControlError(control, ERRORS.EC001());
        return false;
      } else {
        return true;
      }
    } else {
      showControlError(
        control,
        `${ERRORS.EC002(getControlLabelText(advertiserTypeControl))}`
      );
      return false;
    }
  }
}
