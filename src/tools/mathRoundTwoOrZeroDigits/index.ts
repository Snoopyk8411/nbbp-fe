import { mathRoundTwoDigits } from 'tools/formatters/math-round-two-digits';

export const mathRoundTwoOrZeroDigits = (flag: boolean, value: number): number => {
  return flag ? Math.round(value) : mathRoundTwoDigits(value);
};
