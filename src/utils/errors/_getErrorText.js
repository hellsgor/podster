import {ERRORS} from 'Constants/errors';

export function getErrorText(errorCode, control) {
  return ERRORS[errorCode];
}
