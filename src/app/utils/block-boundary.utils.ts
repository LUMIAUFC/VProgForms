export const isLeavingBlockBoundary = (
  blockElement: HTMLElement | null,
  relatedTarget: EventTarget | null
): boolean => {
  if (!blockElement || !(relatedTarget instanceof Node)) {
    return false;
  }
  return !blockElement.contains(relatedTarget);
};

export const shouldAnnounceBlockExit = (
  blockElement: HTMLElement | null,
  relatedTarget: EventTarget | null
): boolean => {
  if (!isLeavingBlockBoundary(blockElement, relatedTarget)) {
    return false;
  }

  if (relatedTarget instanceof Element) {
    return relatedTarget.closest('[data-block-boundary="true"]') === null;
  }

  return true;
};

const DEFAULT_ANNOUNCE_DELAY_MS = 30;
const pendingAnnounceState: { timer: ReturnType<typeof setTimeout> | null } = { timer: null };

export const announceBlockBoundaryExit = (
  message: string,
  delayMs: number = DEFAULT_ANNOUNCE_DELAY_MS
): void => {
  const announcer = document.getElementById('block-boundary-announcer');
  const trimmed = message.trim();
  if (!announcer || !trimmed) {
    return;
  }

  if (pendingAnnounceState.timer !== null) {
    clearTimeout(pendingAnnounceState.timer);
    pendingAnnounceState.timer = null;
  }

  announcer.textContent = '';
  pendingAnnounceState.timer = setTimeout(() => {
    announcer.textContent = trimmed;
    pendingAnnounceState.timer = null;
  }, Math.max(0, delayMs));
};
