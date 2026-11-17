import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { BlockBoundaryDirective } from '../../directives/block-boundary.directive';
import { AccessibleMathPipe } from '../../pipes/accessible-math.pipe';
import { BlockReorderComponent } from '../block-reorder/block-reorder.component';
import { CommandButtonComponent } from '../command-button/command-button.component';
import { ConditionalComponent } from '../conditional/conditional.component';
import { OperatorComponent } from '../operator/operator.component';
import { WriteComponent } from '../write/write.component';

import { ForComponent } from './for.component';

describe('ForComponent', () => {
  let component: ForComponent;
  let fixture: ComponentFixture<ForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule, TranslateModule.forRoot()],
      declarations: [
        ForComponent,
        CommandButtonComponent,
        BlockReorderComponent,
        BlockBoundaryDirective,
        AccessibleMathPipe,
        WriteComponent,
        OperatorComponent,
        ConditionalComponent
      ],
      providers: [AccessibleMathPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForComponent);
    component = fixture.componentInstance;
    component.index = 0;
    component.variables = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const rootEl = fixture.nativeElement.querySelector('#for') as HTMLElement;
    expect(rootEl.getAttribute('role')).toBe('group');
  });
});
