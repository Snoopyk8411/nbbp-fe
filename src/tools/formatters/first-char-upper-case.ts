export const withFirstCharUpperCase = (incomeString: string): string => {
  const [firstChar, ...restString] = incomeString.split('');

  return (firstChar || '').toUpperCase().concat(restString.join(''));
};
