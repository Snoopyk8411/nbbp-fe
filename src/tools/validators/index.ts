const emailRegex = new RegExp(/\S+@\S+\.\S+/);

export const emailValidator = (value: string): boolean => (emailRegex.test(value) ? true : false);
export const requiredValidator = (value: unknown): string | undefined => (value ? '' : 'Error');
export const requiredArrayValidator = (value: []): string | undefined => (value && value.length !== 0 ? '' : 'Error');
export const requiredValidatorZeroField = (value: unknown): string | undefined => {
  if (value === 0) {
    return '';
  }
  return value ? '' : 'Error';
};
