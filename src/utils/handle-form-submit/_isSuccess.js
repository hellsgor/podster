import {RESPONSE} from 'Constants/response';

export function isSuccess(response) {
  return !!(response.status && response.status === RESPONSE.STATUS);
}
