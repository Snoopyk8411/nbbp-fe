import { addLeadingZero } from 'tools/formatters/add-leading-zero';

export const getDateStringFromTimestamp = (timestamp: string): string => {
  let dateObject = new Date(timestamp);
  let month = dateObject.getMonth() + 1;
  let date = dateObject.getDate();
  return dateObject.getFullYear() + '-' + addLeadingZero(month) + '-' + addLeadingZero(date);
};
