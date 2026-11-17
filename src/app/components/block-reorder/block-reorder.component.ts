import { Component, ElementRef, EventEmitter, HostBinding, Input, Optional, Output } from '@angular/core';
import { AudioFeedbackService } from '../../core/services/audio-feedback.service';

@Component({
  selector: 'app-block-reorder',
  templateUrl: './block-reorder.component.html'
})
export class BlockReorderComponent {
  @Input() index: number = 0;
  @Input() total: number = 0;
  @Input() contextLabel: string = '';

  @HostBinding('attr.data-reorder-index')
  get reorderIndex(): number {
    return this.index;
  }

  @Output() moveUp = new EventEmitter<number>();
  @Output() moveDown = new EventEmitter<number>();

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Optional() private audioFeedback?: AudioFeedbackService
  ) { }

  get isFirst(): boolean {
    return this.index <= 0;
  }

  get isLast(): boolean {
    return this.index >= this.total - 1;
  }

  onMoveUp(): void {
    if (this.isFirst) {
      return;
    }
    const targetIndex = this.index - 1;
    const listContainer = this.getListContainer();
    this.moveUp.emit(this.index);
    this.audioFeedback?.notifyAction('moveUp', 'ACCESSIBILITY.MOVED_TO_POSITION', {
      label: this.contextLabel,
      position: targetIndex + 1,
      total: this.total
    });
    this.focusMovedButton(listContainer, targetIndex, targetIndex === 0 ? 'down' : 'up');
  }

  onMoveDown(): void {
    if (this.isLast) {
      return;
    }
    const targetIndex = this.index + 1;
    const listContainer = this.getListContainer();
    this.moveDown.emit(this.index);
    this.audioFeedback?.notifyAction('moveDown', 'ACCESSIBILITY.MOVED_TO_POSITION', {
      label: this.contextLabel,
      position: targetIndex + 1,
      total: this.total
    });
    this.focusMovedButton(
      listContainer,
      targetIndex,
      targetIndex >= this.total - 1 ? 'up' : 'down'
    );
  }

  private getListContainer(): Element | null {
    return this.elementRef.nativeElement.closest('.area-terminal-comandos-comandos, .zindex');
  }

  private focusMovedButton(
    listContainer: Element | null,
    targetIndex: number,
    direction: 'up' | 'down'
  ): void {
    if (!listContainer) {
      return;
    }

    setTimeout(() => {
      requestAnimationFrame(() => {
        const candidates = Array.from(listContainer.querySelectorAll('app-block-reorder'));
        const targetReorder = candidates.find(
          (el) =>
            el.closest('.area-terminal-comandos-comandos, .zindex') === listContainer &&
            el.getAttribute('data-reorder-index') === String(targetIndex)
        );

        const preferredButton = targetReorder?.querySelector<HTMLButtonElement>(
          `button[data-direction="${direction}"]:not(:disabled)`
        );
        const fallbackButton = targetReorder?.querySelector<HTMLButtonElement>(
          'button:not(:disabled)'
        );
        (preferredButton ?? fallbackButton)?.focus();
      });
    }, 50);
  }
}
