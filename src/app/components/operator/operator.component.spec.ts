import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { BlockBoundaryDirective } from '../../directives/block-boundary.directive';
import { AccessibleMathPipe } from '../../pipes/accessible-math.pipe';
import { BlockReorderComponent } from '../block-reorder/block-reorder.component';
import { CommandButtonComponent } from '../command-button/command-button.component';

import { OperatorComponent } from './operator.component';

describe('OperatorComponent', () => {
  let component: OperatorComponent;
  let fixture: ComponentFixture<OperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule, TranslateModule.forRoot()],
      declarations: [
        OperatorComponent,
        CommandButtonComponent,
        BlockReorderComponent,
        BlockBoundaryDirective,
        AccessibleMathPipe
      ],
      providers: [AccessibleMathPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorComponent);
    component = fixture.componentInstance;
    component.index = 0;
    component.variables = [{ value: { name: 'x', type: 'INTEGER' } }];
    component.operator = {
      reference: 'x',
      currentVariable: { name: 'x', type: 'INTEGER' },
      value: '',
      operators: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve mapear * para a chave de multiplicação e não ocultar a option com aria-hidden', () => {
    expect(component.getOperatorLabelKey('*')).toBe('GENERAL.MULTPLICATION');

    component.operator.operators = [{ index: 0, type: 'OPERATOR', value: '*' }];
    fixture.detectChanges();

    const multiplyOption = Array.from(
      fixture.nativeElement.querySelectorAll('option') as NodeListOf<HTMLOptionElement>
    ).find((opt) => opt.textContent?.trim() === '*');

    expect(multiplyOption).toBeTruthy();
    expect(multiplyOption?.getAttribute('aria-label')).toBe('GENERAL.MULTPLICATION');
    expect(multiplyOption?.querySelector('[aria-hidden="true"]')).toBeNull();
  });

  it('deve mover o foco para "recebe" quando o único sub-comando for deletado', fakeAsync(() => {
    component.operator.operators = [{ index: 0, type: 'VALUE', value: '5' }];
    fixture.detectChanges();

    const receiveEl = fixture.nativeElement.querySelector('#operator-receive-0') as HTMLElement;
    spyOn(receiveEl, 'focus');

    component.clearOperator(0);
    tick(250);

    expect(component.operator.operators.length).toBe(0);
    expect(receiveEl.focus).toHaveBeenCalled();
  }));
});
