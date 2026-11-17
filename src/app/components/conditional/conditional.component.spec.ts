import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { BlockBoundaryDirective } from '../../directives/block-boundary.directive';
import { AccessibleMathPipe } from '../../pipes/accessible-math.pipe';
import { BlockReorderComponent } from '../block-reorder/block-reorder.component';
import { CommandButtonComponent } from '../command-button/command-button.component';
import { ForComponent } from '../for/for.component';
import { OperatorComponent } from '../operator/operator.component';
import { WriteComponent } from '../write/write.component';

import { ConditionalComponent } from './conditional.component';

describe('ConditionalComponent', () => {
  let component: ConditionalComponent;
  let fixture: ComponentFixture<ConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule, TranslateModule.forRoot()],
      declarations: [
        ConditionalComponent,
        CommandButtonComponent,
        BlockReorderComponent,
        BlockBoundaryDirective,
        AccessibleMathPipe,
        WriteComponent,
        OperatorComponent,
        ForComponent
      ],
      providers: [AccessibleMathPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalComponent);
    component = fixture.componentInstance;
    component.index = 0;
    component.variables = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve posicionar os botões de ação do bloco após o conteúdo do senão no DOM', () => {
    const rootEl = fixture.nativeElement.querySelector('#conditional') as HTMLElement;
    const elseSpan = Array.from(rootEl.querySelectorAll('span')).find((el) =>
      el.textContent?.includes('GENERAL.ELSE_IF')
    ) as HTMLElement;
    const blockReorder = rootEl.querySelector('app-block-reorder') as HTMLElement;

    expect(elseSpan).toBeTruthy();
    expect(blockReorder).toBeTruthy();
    const order = elseSpan.compareDocumentPosition(blockReorder);
    expect(order & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
