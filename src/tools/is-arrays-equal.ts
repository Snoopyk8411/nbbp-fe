const hasDifference = (array1: any[], array2: any[]): boolean => {
  if (array1.length === 0 && array2.length === 0) {
    return false;
  }
  const array1Set = new Set(array1);
  const array2Set = new Set(array2);
  const difference = new Set(array1Set);
  for (const element of array2Set) {
    difference.delete(element);
  }
  return [...difference].length !== 0;
};

export const isArraysEqual = (array1Raw: any[] | null = [], array2Raw: any[] | null = []): boolean => {
  const array1 = array1Raw === null ? [] : array1Raw;
  const array2 = array2Raw === null ? [] : array2Raw;
  const array1Length = array1.length;
  const array2Length = array2.length;
  const hasDiffLength = array1Length !== array2Length;
  const hasSameLength = !hasDiffLength;

  if (hasDiffLength || (hasSameLength && hasDifference(array1, array2))) {
    return false;
  }
  return true;
};
