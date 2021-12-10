import { addLeadingZero } from 'tools/formatters/add-leading-zero';

export const getDateStringFromTimestamp = (timestamp: string): string => {
  const dateObject = new Date(timestamp);
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();
  return dateObject.getFullYear() + '-' + addLeadingZero(month) + '-' + addLeadingZero(date);
};
