import { addLeadingZero } from './add-leading-zero';

export function formatAMPMDate(date: Date): string {
  // Months are numbered from zero
  const month = date.getMonth() + 1;
  const dateString = `${addLeadingZero(date.getDate())}/${addLeadingZero(month)}/${date.getFullYear()}`;
  // The hour '0' should be '12'
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const timeString = `${addLeadingZero(hours)}:${addLeadingZero(date.getMinutes())}:${addLeadingZero(date.getSeconds())} ${ampm}`;
  // Output example: '29/06/2021 12:00:00 AM'
  return `${dateString} ${timeString}`;
}
