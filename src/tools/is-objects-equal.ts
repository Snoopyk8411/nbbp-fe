const isNullish = (object?: any): boolean => {
  const isObjectNullish = object === undefined || object === null;
  return isObjectNullish;
};

const hasDifference = (
  object1: any | null | undefined,
  object2: any | null | undefined,
  object1Length: number,
  object2Length: number,
  comparementField?: string,
): boolean => {
  if (object1Length === 0 && object2Length === 0) {
    return false;
  }
  const [{ name: name1, id: id1, code: code1 }, { name: name2, id: id2, code: code2 }] = [object1, object2];
  const hasDiffInCommonValues = id1 !== id2 || code1 !== code2 || name1 !== name2;
  let hasDiffInExtraValues = false;
  if (comparementField) {
    const object1FieldValue = object1[comparementField];
    const object2FieldValue = object2[comparementField];
    hasDiffInExtraValues = object1FieldValue !== object2FieldValue;
  }

  const hasDiffInValues = hasDiffInCommonValues || hasDiffInExtraValues;
  return hasDiffInValues;
};

export const isObjectsEqual = (object1: any | null | undefined, object2?: any | null | undefined, comparementField?: string): boolean => {
  const isObject1Nullish = isNullish(object1);
  const isObject2Nullish = isNullish(object2);
  if (isObject1Nullish || isObject2Nullish) return object1 === object2;

  const isNotObject1 = typeof object1 !== 'object';
  const isNotObject2 = typeof object2 !== 'object';
  if (isNotObject1 || isNotObject2) return object1 === object2;

  const object1Length = object1 ? Object.keys(object1).length : 0;
  const object2Length = object2 ? Object.keys(object2).length : 0;
  const hasDiffLength = object1Length !== object2Length;
  const hasSameLength = !hasDiffLength;

  if (hasDiffLength || (hasSameLength && hasDifference(object1, object2, object1Length, object2Length, comparementField))) {
    return false;
  }
  return true;
};
