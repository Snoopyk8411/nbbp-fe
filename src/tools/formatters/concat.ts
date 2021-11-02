export function concatWithSpace(str1: string | null | undefined, str2: string | null | undefined): string {
  return `${str1 ? str1 + ' ' : ''}${str2 || ''}`;
}
