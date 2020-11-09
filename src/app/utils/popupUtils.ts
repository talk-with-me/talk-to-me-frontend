const TTM_HAS_SEEN_POPUP_KEY = 'ttm-has-seen-popup';

export function hasSeenPopup(): string {
  return localStorage.getItem(TTM_HAS_SEEN_POPUP_KEY);
}

export function rememberSeenPopup(): void {
  localStorage.setItem(TTM_HAS_SEEN_POPUP_KEY, 'true');
}
