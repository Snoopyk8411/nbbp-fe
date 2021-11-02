export const revertObject = <ObjectType>(inputObject: ObjectType): ObjectType => {
  const outputObject: any = {};
  for (const [key, value] of Object.entries(inputObject)) {
    outputObject[value] = key;
  }
  return outputObject;
};
