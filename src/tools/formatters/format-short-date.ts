import { addLeadingZero } from './add-leading-zero';

export function formatShortDate(date: Date | null | undefined | string): string {
  if (date) {
    const parseDate = new Date(date);
    const month = parseDate.getMonth() + 1;
    // Output example: '01/06/2021'
    return `${addLeadingZero(parseDate.getDate())}/${addLeadingZero(month)}/${parseDate.getFullYear()}`;
  }
  return '';
}
