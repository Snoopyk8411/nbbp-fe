export const trimPunctuation = (value: string): string => {
  const trimPunctuationRegEx = /^[\p{P}]*(.+?)[\p{P}]*$/u;
  const [, result] = value.match(trimPunctuationRegEx) || [];
  return result || '';
};
