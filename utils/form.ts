import {FormState} from 'react-hook-form';
import {InputState} from '../components/Input';

export function getInputStateByFormState(
  formState: FormState<any>,
  field: string
): InputState {
  return formState.errors[field]
    ? 'error'
    : formState.dirtyFields[field]
      ? 'success'
      : 'default';
}

export function getButtonDisabledState(formState: FormState<any>): boolean {
  // if isValid, then set disabled to false
  return !formState.isValid;
}
