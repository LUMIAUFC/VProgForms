/**
 * Move o foco para o primeiro item habilitado de um menu `ngbDropdown` recém-aberto,
 * garantindo navegação imediata por setas e compatibilidade com leitores de tela (NVDA).
 */
export const focusFirstDropdownItem = (toggleId: string): void => {
  setTimeout(() => {
    const firstItem = document.querySelector<HTMLElement>(
      `[aria-labelledby="${toggleId}"] [ngbDropdownItem]:not([disabled])`
    );
    firstItem?.focus();
  }, 0);
};
