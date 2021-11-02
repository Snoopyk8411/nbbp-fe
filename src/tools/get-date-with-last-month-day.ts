/**
 * This function is needed for most 'to' part of periods used ingeneration reports.
 * It must be used right before getISOOfDate.
 */
export const getDateWithLastMonthDay = (inputDate: Date | undefined | null): Date | undefined | null => {
  if (!inputDate || !(inputDate instanceof Date)) {
    return inputDate;
  }
  return new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, 0);
};
