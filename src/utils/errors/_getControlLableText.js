import {getControlParent} from 'Utils/errors/_getControlParent';

export function getControlLabelText(control) {
  return getControlParent(control).querySelector('label').textContent;
}
