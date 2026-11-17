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

export const announceBlockBoundaryExit = (message: string): void => {
  const announcer = document.getElementById('block-boundary-announcer');
  const trimmed = message.trim();
  if (!announcer || !trimmed) {
    return;
  }

  announcer.textContent = '';
  setTimeout(() => {
    announcer.textContent = trimmed;
  }, 30);
};
