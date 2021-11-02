export type IDataKeys<DataSet> = (keyof DataSet)[];

export function transformProps<Type, Key extends keyof Type, TransformFunc extends Function>(
  dataSet: Type,
  propNames: Key[],
  transformFunc: TransformFunc,
): { [key in Key]?: any } {
  const insertSet: { [key in Key]?: any } = {};
  propNames.forEach(propName => {
    insertSet[propName] = transformFunc(dataSet[propName]);
  });
  return insertSet;
}
