import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { BlockReorderComponent } from './components/block-reorder/block-reorder.component';
import { CommandButtonComponent } from './components/command-button/command-button.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { ForComponent } from './components/for/for.component';
import { OperatorComponent } from './components/operator/operator.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { VariableComponent } from './components/variable/variable.component';
import { WriteComponent } from './components/write/write.component';
import { BlockBoundaryDirective } from './directives/block-boundary.directive';
import { AudioFeedbackService } from './core/services/audio-feedback.service';
import { LogExportService } from './features/logs/services/log-export.service';
import { LogService } from './features/logs/services/log.service';
import { AccessibleMathPipe } from './pipes/accessible-math.pipe';

describe('AppComponent', () => {
  const logServiceStub = {
    adicionarLog: async () => 1,
    atualizarLog: async () => 1,
    adicionarExecucao: async () => undefined,
    exportLog: async () => undefined
  };

  const logExportServiceStub = {
    exportLogTxt: () => undefined
  };

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        NgbModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent,
        TerminalComponent,
        VariableComponent,
        WriteComponent,
        OperatorComponent,
        CommandButtonComponent,
        ConditionalComponent,
        ForComponent,
        AccessibleMathPipe,
        BlockReorderComponent,
        BlockBoundaryDirective
      ],
      providers: [
        AccessibleMathPipe,
        { provide: LogService, useValue: logServiceStub },
        { provide: LogExportService, useValue: logExportServiceStub }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ivprog'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ivprog');
  });

  it('deve renderizar o anúncio de fronteira de bloco e prefixar erros brutos do vcat', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('pt', {
      EXECUTION_ERROR: { PREFIX: 'Erro: ' }
    });
    translate.use('pt');

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#block-boundary-announcer')).toBeTruthy();

    const app = fixture.componentInstance as any;
    expect(app.resolveVcatErrorMessage({ message: 'divisão por zero' })).toBe('Erro: divisão por zero');
    expect(app.resolveVcatErrorMessage({ message: 'Erro: variável ausente' })).toBe('Erro: variável ausente');
  });

  it('deve focar diretamente #terminal-consent-box ao iniciar monitoramento sem consentimento', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    void app.startMonitoring();
    fixture.detectChanges();
    tick(250);

    const consentBox = fixture.nativeElement.querySelector('#terminal-consent-box') as HTMLElement;
    expect(consentBox).toBeTruthy();
    expect(document.activeElement).toBe(consentBox);
  }));

  it('deve alternar o estado do botão de retorno sonoro no cabeçalho', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const soundBtn = fixture.nativeElement.querySelector('#btn-toggle-sound') as HTMLButtonElement;
    expect(soundBtn).toBeTruthy();
    expect(soundBtn.getAttribute('aria-pressed')).toBe('true');

    soundBtn.click();
    fixture.detectChanges();
    expect(soundBtn.getAttribute('aria-pressed')).toBe('false');
  });

  it('deve tocar feedback sonoro ao iniciar e encerrar a gravação quando houver consentimento', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const audioFeedback = TestBed.inject(AudioFeedbackService);
    const playSpy = spyOn(audioFeedback, 'playEffect');

    fixture.detectChanges();

    void app.startMonitoring();
    tick(250);
    expect(playSpy).not.toHaveBeenCalled();

    localStorage.setItem('consentimento_coleta', 'true');
    void app.startMonitoring();
    tick(3600);
    expect(playSpy).toHaveBeenCalledWith('recordStart');

    void app.stopMonitoring();
    tick(200);
    expect(playSpy).toHaveBeenCalledWith('recordStop');

    app.downloadableLog = { dataHoraInicio: new Date(), dataHoraFim: new Date(), execucoes: [] };
    app.downloadLog();
    expect(playSpy).toHaveBeenCalledWith('success');
  }));
});
