import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

const TTM_HAS_SEEN_POPUP_KEY = 'false';

export function hasSeenPopup(): string {
  return localStorage.getItem(TTM_HAS_SEEN_POPUP_KEY);
}

export function rememberSeenPopup(): void {
  localStorage.setItem(TTM_HAS_SEEN_POPUP_KEY, 'true');
}
