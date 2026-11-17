import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { CommandButtonComponent } from './command-button.component';

describe('CommandButtonComponent', () => {
  let component: CommandButtonComponent;
  let fixture: ComponentFixture<CommandButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule, TranslateModule.forRoot()],
      declarations: [CommandButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('não deve renderizar title="undefined" quando title não for informado', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.getAttribute('title')).toBeNull();
    expect(button.getAttribute('aria-label')).toBe('COMANDS.TITLE');
  });
});
