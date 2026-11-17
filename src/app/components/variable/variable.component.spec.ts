import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { BlockBoundaryDirective } from '../../directives/block-boundary.directive';
import { BlockReorderComponent } from '../block-reorder/block-reorder.component';
import { CommandButtonComponent } from '../command-button/command-button.component';

import { VariableComponent } from './variable.component';

describe('VariableComponent', () => {
  let component: VariableComponent;
  let fixture: ComponentFixture<VariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule, TranslateModule.forRoot()],
      declarations: [
        VariableComponent,
        CommandButtonComponent,
        BlockReorderComponent,
        BlockBoundaryDirective
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableComponent);
    component = fixture.componentInstance;
    component.index = 0;
    component.variable = { name: 'x', type: 'INTEGER', value: 0 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
