import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AudioFeedbackService } from './audio-feedback.service';

describe('AudioFeedbackService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [AudioFeedbackService]
    });
  });

  it('deve iniciar habilitado por padrão e persistir alternância no localStorage', () => {
    const service = TestBed.inject(AudioFeedbackService);
    expect(service.isSoundEnabled).toBeTrue();

    expect(service.toggleSound()).toBeFalse();
    expect(localStorage.getItem('soundEnabled')).toBe('false');

    expect(service.toggleSound()).toBeTrue();
    expect(localStorage.getItem('soundEnabled')).toBe('true');
  });

  it('deve respeitar preferência soundEnabled=false salva previamente', () => {
    localStorage.setItem('soundEnabled', 'false');
    const service = TestBed.inject(AudioFeedbackService);
    expect(service.isSoundEnabled).toBeFalse();
  });

  it('deve emitir anúncio traduzido em #block-boundary-announcer via notifyAction', (done) => {
    const announcer = document.createElement('div');
    announcer.id = 'block-boundary-announcer';
    document.body.appendChild(announcer);

    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('pt', {
      ACCESSIBILITY: {
        MOVED_TO_POSITION: '{{label}} movido para a posição {{position}} de {{total}}'
      }
    });
    translate.use('pt');

    const service = TestBed.inject(AudioFeedbackService);
    service.notifyAction('moveUp', 'ACCESSIBILITY.MOVED_TO_POSITION', {
      label: 'soma',
      position: 1,
      total: 3
    });

    setTimeout(() => {
      expect(announcer.textContent).toBe('soma movido para a posição 1 de 3');
      document.body.removeChild(announcer);
      done();
    }, 60);
  });
});
