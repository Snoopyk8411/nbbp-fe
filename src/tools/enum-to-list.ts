export const enumToList = <T>(enumObj: object): T[] => {
  const values = Object.values(enumObj);
  return values.slice(0, values.length / 2);
};
