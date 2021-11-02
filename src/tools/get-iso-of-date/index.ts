export const getISOOfDate = (date: Date | undefined | null): Date | undefined | null => {
  if (!date || !(date instanceof Date)) {
    return date;
  }
  return cutTimeZone(date);
};

export const adaptDateCutTimeZoneAndFormat = (date: string | Date): Date => {
  const newDate = new Date(date.toString().slice(0, -2));
  return new Date(newDate.getFullYear(), newDate.getDate(), newDate.getMonth());
};

export const cutTimeZone = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), -date.getTimezoneOffset() / 60);
};
