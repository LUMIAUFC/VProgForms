import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TerminalComponent } from './terminal.component';

describe('TerminalComponent', () => {
  let component: TerminalComponent;
  let fixture: ComponentFixture<TerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TerminalComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve configurar região acessível e botões contextualizados no termo de consentimento', () => {
    component.showConsent = true;
    fixture.detectChanges();

    const consentBox = fixture.nativeElement.querySelector('#terminal-consent-box') as HTMLElement;
    const proceedBtn = fixture.nativeElement.querySelector('#btn-consent-accept') as HTMLButtonElement;
    const cancelBtn = fixture.nativeElement.querySelector('#btn-consent-cancel') as HTMLButtonElement;

    expect(consentBox.getAttribute('role')).toBe('region');
    expect(consentBox.getAttribute('tabindex')).toBe('0');
    expect(consentBox.getAttribute('aria-labelledby')).toBe('consent-modal-title');
    expect(consentBox.getAttribute('aria-describedby')).toBe('consent-modal-description');
    expect(proceedBtn.getAttribute('aria-label')).toBe('CONSENT_MODAL.PROCEED_ARIA');
    expect(cancelBtn.getAttribute('aria-label')).toBe('CONSENT_MODAL.CANCEL_ARIA');
  });

  it('não deve usar aria-live duplicado na mensagem de gravação em andamento', () => {
    component.isRecordingLog = true;
    component.isRunning = false;
    component.showConsent = false;
    component.isDownloadReady = false;
    fixture.detectChanges();

    const recordingMsg = fixture.nativeElement.querySelector('#log-recording-message') as HTMLElement;
    expect(recordingMsg.getAttribute('aria-live')).toBeNull();
  });

  it('deve associar mensagem de encerramento ao botão de download ao finalizar gravação', () => {
    component.isDownloadReady = true;
    fixture.detectChanges();

    const finishedMsg = fixture.nativeElement.querySelector('#recording-finished-msg') as HTMLElement;
    const downloadBtn = fixture.nativeElement.querySelector('#btn-download-log') as HTMLButtonElement;

    expect(finishedMsg).toBeTruthy();
    expect(downloadBtn.getAttribute('aria-describedby')).toBe('recording-finished-msg');
    expect(downloadBtn.getAttribute('aria-label')).toBe('TERMINAL.DOWNLOAD_LOG_ARIA');
  });
});
