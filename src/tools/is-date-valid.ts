export const isDateValid = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};
