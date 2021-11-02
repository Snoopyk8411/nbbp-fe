const isDefinedNotEmpty = <T>(value: T | null | undefined): value is T => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== undefined && value !== null;
};

export default isDefinedNotEmpty;
