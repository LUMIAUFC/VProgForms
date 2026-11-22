import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AudioFeedbackService } from '../../core/services/audio-feedback.service';
import { AccessibleMathPipe } from '../../pipes/accessible-math.pipe';
import { TypesEnum } from 'src/app/enums/types.enum';
import { moveItemDown, moveItemUp } from '../../utils/reorder.utils';
import { resolveBlockLabel } from '../../utils/sound-effects.utils';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss'],
  providers: [AccessibleMathPipe]
})
export class ForComponent implements OnInit {
  isHidden: boolean = true;
  @Input("text") text: boolean = true;
  @Input("text2") text2: boolean = true;
  @Input("title") title: any;
  @Input("back") back: boolean = false;
  @Input("index") index: any;
  @Input("hasToggle") hasToggle: boolean = true;
  @Input("components") components: any[] = [];
  @Input('variables') variables: any;
  @Input("iconComands") iconComands: boolean = true;

  @Input('for') for: any = {
    variable: '',
    startType: '',
    startValue: '',
    finishType: '',
    finishValue: '',
    incrementType: '',
    incrementValue: '',
    components: []
  };

  forOperator: Array<any> = [];
  commandsPlainText: string = "";

  @Output("remove") remove = new EventEmitter();
  @Output("change") change = new EventEmitter();
  @Output("moveUp") moveUp = new EventEmitter<number>();
  @Output("moveDown") moveDown = new EventEmitter<number>();

  constructor(
    public translate: TranslateService,
    private accMath: AccessibleMathPipe,
    @Optional() private audioFeedback?: AudioFeedbackService
  ) { }

  ngOnInit(): void {
  }

  isVariable(component: any) {
    return component.type == TypesEnum.VARIABLE
  }

  isWriter(component: any) {
    return component.type == TypesEnum.WRITER
  }

  isOperator(component: any) {
    return component.type == TypesEnum.OPERATOR
  }

  isConditional(component: any) {
    return component.type == TypesEnum.CONDITIONAL
  }

  isFor(component: any) {
    return component.type == TypesEnum.FOR_CODITIONAL
  }

  removeComponent(components: any, index: number) {
    const label = resolveBlockLabel(components[index], this.translate.instant('COMANDS.TITLE'));
    components.splice(index, 1);
    this.setStorage();
    this.audioFeedback?.notifyAction('delete', 'ACCESSIBILITY.BLOCK_REMOVED', { label });
  }

  moveNestedComponentUp(index: number): void {
    this.for.components = moveItemUp(this.for.components, index);
    this.setStorage();
  }

  moveNestedComponentDown(index: number): void {
    this.for.components = moveItemDown(this.for.components, index);
    this.setStorage();
  }

  focusFor(index: any) {
    setTimeout(() => {
      let forElement = document.getElementById(`for-op-${this.index}`);

      if (forElement) {
        forElement.focus();
      }
    }, 200);
  }

  clearStartValue() {
    this.for.startValue = '';
    this.setStorage();
  }

  clearFinishValue() {
    this.for.finishValue = '';
    this.setStorage();
  }

  removeFor() {
    this.remove.emit(this.index);
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
    this.audioFeedback?.playEffect('toggle');

    if (!this.isHidden) {
      this.formatCommands();
      setTimeout(() => {
        document.getElementById("for-cod-" + this.index)?.focus();
      }, 200);
    }
    else {
      setTimeout(() => {
        document.getElementById("for-select-var-" + this.index)?.focus();
      }, 200);
    }
  }

  private formatStep(incrementType: string, incrementValue: string): string {
    const signKey = incrementType === '-' ? 'ACCESSIBLE_MATH.SUBTRACT' : 'ACCESSIBLE_MATH.ADD';
    const signLabel = this.translate.instant(signKey);
    return `<span aria-hidden="true">${incrementType}${incrementValue}</span><span class="sr-only">${signLabel} ${incrementValue}</span>`;
  }

  private formatUntilKeyword(currentLang: string): string {
    return currentLang == 'pt'
      ? '<span aria-hidden="true">ate</span><span class="sr-only">até</span>'
      : 'to';
  }

  formatCommands() {
    const currentLang = this.translate.currentLang;
    const until = this.formatUntilKeyword(currentLang);
    const step = this.formatStep(this.for.incrementType, this.for.incrementValue);
    this.commandsPlainText = `<span>${currentLang == 'pt' ? 'repita_para' : 'repeat_for'} ${this.for.variable} ${currentLang == 'pt' ? 'de' : 'from'} ${this.for.startValue} ${until} ${this.for.finishValue} ${currentLang == 'pt' ? 'passo' : 'pass'} ${step} {</span><br/>`;
    this.commandsPlainText += `<span>${this.runCommands(this.for.components)}</span>`;
    this.commandsPlainText += `<span>}</span>`;
  }

  runCommands(components: any) {
    const currentLang = this.translate.currentLang;
    let programComands = "";

    // Other components except variable types
    components.filter((c: any) => c.type != TypesEnum.VARIABLE).forEach((c: any) => {
      if (c.type == TypesEnum.WRITER) {
        if (c.value.type == TypesEnum.VARIABLE) {
          programComands += `&emsp; ${currentLang == 'pt' ? 'escreva' : 'write'}(${c.value.value}) <br/>`;
        } else {
          programComands += `&emsp; ${currentLang == 'pt' ? 'escreva' : 'write'}("${c.value.value}") <br/>`;
        }
      }

      if (c.type == TypesEnum.OPERATOR) {
        programComands += `&emsp; ${c.value.reference} ${this.accMath.transform('<-')} ${this.accMath.transform(c.value.value)} ${this.accMath.transform(';')} <br/>`;
      }

      if (c.type == TypesEnum.CONDITIONAL) {
        programComands += `&emsp; ${currentLang == 'pt' ? 'se' : 'if'} ( ${this.accMath.transform(c.value.condition.value)} ) { <br/>`;
        programComands += `&emsp; ${this.runCommands(c.value.condition.components)}`;
        programComands += `&emsp; } ${currentLang == 'pt' ? 'senao' : 'else'} { <br/>`;
        programComands += `&emsp; ${this.runCommands(c.value.nocondition.components)}`;
        programComands += `&emsp; } <br/>`;
      }

      if (c.type == TypesEnum.FOR_CODITIONAL) {
        const until = this.formatUntilKeyword(currentLang);
        const step = this.formatStep(c.value.incrementType, c.value.incrementValue);
        programComands += `&emsp; ${currentLang == 'pt' ? 'repita_para' : 'repeat_for'} ${c.value.variable} ${currentLang == 'pt' ? 'de' : 'from'} ${c.value.startValue} ${until} ${c.value.finishValue} ${currentLang == 'pt' ? 'passo' : 'pass'} ${step} { <br/>`;
        programComands += `&emsp; ${this.runCommands(c.value.components)}`;
        programComands += `&emsp; } <br/>`;
      }
    });

    return programComands;
  }

  setStorage() {
    this.change.emit();
  }
}
