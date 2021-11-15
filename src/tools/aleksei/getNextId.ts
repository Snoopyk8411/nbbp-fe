const MIN_ID = 1;
const ID_INCREMENT = 1;

export const getNextId = (ids: string[]): number => {
  const idsAsNumbers = ids.map(id => Number(id)).filter(id => !isNaN(id));
  const maxId = Math.max(...idsAsNumbers);
  return maxId >= MIN_ID ? maxId + ID_INCREMENT : MIN_ID;
};
