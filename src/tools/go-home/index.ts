import { Pages } from 'constants/pages/ids';
import { paths } from 'constants/pages/paths';

export function goHome(): void {
  window.location.href = paths[Pages.Home];
}
