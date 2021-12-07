import { trimPunctuation } from './trimPunctuation';

const TEST_STRING = 'молоко';

const PUNCTUATION_CHARS = '\'",.;:?!';

describe('trim punctuation', () => {
  it('should trim different punctuation in the beginning of the word', () => {
    expect(trimPunctuation(`${PUNCTUATION_CHARS}${TEST_STRING}`)).toBe(TEST_STRING);
  });
  it('should trim different punctuation at the end of the word', () => {
    expect(trimPunctuation(`${TEST_STRING}${PUNCTUATION_CHARS}`)).toBe(TEST_STRING);
  });
  it('should trim different punctuation around the word', () => {
    expect(trimPunctuation(`${PUNCTUATION_CHARS}${TEST_STRING}${PUNCTUATION_CHARS}`)).toBe(TEST_STRING);
  });
  it('should not touch punctuation in the middle of the word', () => {
    expect(trimPunctuation(`${TEST_STRING}${PUNCTUATION_CHARS}${TEST_STRING}`)).toBe(
      `${TEST_STRING}${PUNCTUATION_CHARS}${TEST_STRING}`,
    );
  });
});
