export function getCookieByName(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1] || '') : undefined;
}

export function setCookie(name: string, value: string): void {
  document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

export function deleteCookie(name: string): void {
  setCookie(name, '');
}
