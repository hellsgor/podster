import {USER_REG_TYPES} from 'Constants/user-reg-types';
import {REG_EXPS} from 'Constants/reg-exps';

export function getInnRegExp(value) {
  if (value === USER_REG_TYPES.LEGAL_PERSON) {
    return REG_EXPS.INN.legal_person;
  } else {
    return REG_EXPS.INN.other;
  }
}
