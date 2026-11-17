import { Directive, ElementRef, HostBinding, HostListener, Input, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { announceBlockBoundaryExit, shouldAnnounceBlockExit } from '../utils/block-boundary.utils';

@Directive({
  selector: '[appBlockBoundary]'
})
export class BlockBoundaryDirective {
  @Input('appBlockBoundary') blockLabel: string = '';

  @HostBinding('attr.role') readonly role = 'group';
  @HostBinding('attr.data-block-boundary') readonly dataBlockBoundary = 'true';

  @HostBinding('attr.aria-label')
  get ariaLabel(): string {
    return this.blockLabel;
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Optional() private translate?: TranslateService
  ) {}

  @HostListener('focusout', ['$event'])
  onFocusOut(event: FocusEvent): void {
    const hostElement = this.elementRef.nativeElement;
    if (!shouldAnnounceBlockExit(hostElement, event.relatedTarget)) {
      return;
    }

    event.stopPropagation();

    const exitMessage = this.translate
      ? this.translate.instant('ACCESSIBILITY.BLOCK_EXIT', { block: this.blockLabel })
      : `Saindo de ${this.blockLabel}`;

    announceBlockBoundaryExit(exitMessage);
  }
}
