export function utf8ToB64(str: string): string {
  return window.btoa(unescape(encodeURIComponent(str)));
}
