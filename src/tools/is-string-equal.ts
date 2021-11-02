export const isStringEqual = (item1: string | undefined | null, item2: string | undefined | null): boolean => {
  if (!item1 && !item2) {
    return true;
  }
  if ((item1 && !item2) || (!item1 && item2)) {
    return false;
  }
  return item1 === item2;
};
