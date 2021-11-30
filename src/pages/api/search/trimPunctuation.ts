const PUNCTUATION_CODES = ['\u002C', '\u0022', '\u0027', '\u00B4', '\u2018', '\u2019', '\u201C', '\u201D'];

export const trimPunctuation = (value: string): string => {
  const re = RegExp(`^[${PUNCTUATION_CODES.join()}]*(.+?)[${PUNCTUATION_CODES.join()}]*$`, 'gmu');
  const result = re.exec(value);
  return result && result.length > 1 ? (result[1] as string) : '';
};
