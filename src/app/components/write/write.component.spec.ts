import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { BlockBoundaryDirective } from '../../directives/block-boundary.directive';
import { BlockReorderComponent } from '../block-reorder/block-reorder.component';
import { CommandButtonComponent } from '../command-button/command-button.component';

import { WriteComponent } from './write.component';

describe('WriteComponent', () => {
  let component: WriteComponent;
  let fixture: ComponentFixture<WriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule, TranslateModule.forRoot()],
      declarations: [
        WriteComponent,
        CommandButtonComponent,
        BlockReorderComponent,
        BlockBoundaryDirective
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteComponent);
    component = fixture.componentInstance;
    component.index = 0;
    component.variables = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
