export const isDateEqual = (item1: Date | undefined | null, item2: Date | undefined | null): boolean => {
  if (!item1 && !item2) {
    return true;
  }
  if ((item1 && !item2) || (!item1 && item2)) {
    return false;
  }
  return item1?.getTime() === item2?.getTime();
};
