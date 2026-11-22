import { Component, EventEmitter, Input, OnInit, Optional, Output, HostListener, ElementRef } from '@angular/core';
import { AudioFeedbackService } from 'src/app/core/services/audio-feedback.service';
import { TypesEnum } from 'src/app/enums/types.enum';
import { focusFirstDropdownItem } from 'src/app/utils/dropdown-focus.utils';
import { generateNextVariableName } from 'src/app/utils/reorder.utils';

@Component({
  selector: 'app-command-button',
  templateUrl: './command-button.component.html',
  styleUrls: ['./command-button.component.scss']
})
export class CommandButtonComponent implements OnInit {
  private static nextInstanceId = 0;
  readonly instanceId = ++CommandButtonComponent.nextInstanceId;

  @Input("mode") mode: any = "block";
  @Input("text") text: boolean = true;
  @Input("text2") text2: boolean = false;
  @Input("hasVariables") hasVariables: boolean = true;
  @Input("iconComands") iconComands: boolean = true;
  @Input("variant") variant: 'default' | 'add-block' = 'default';
  @Input("title") title: string = '';
  @Input("components") components: any[] = [];
  @Input("variables") variables: any[] = [];
  @Input("writers") writers: any[] = [];
  @Input("operators") operators: any[] = [];
  @Input("conditionals") conditionals: any[] = [];
  @Input("for") for: any[] = [];

  @Output("change") change = new EventEmitter();

  get buttonId(): string {
    return this.mode === 'block'
      ? 'btn-dropdown-comandos'
      : `btn-dropdown-comandos-${this.instanceId}`;
  }

  constructor(
    private elementRef: ElementRef,
    @Optional() private audioFeedback?: AudioFeedbackService
  ) { }

  ngOnInit(): void {
  }

  onDropdownOpenChange(isOpen: boolean): void {
    if (isOpen) {
      focusFirstDropdownItem(this.buttonId);
    }
  }

  addVariable() {
    const variable = {
      name: generateNextVariableName(this.components),
      value: '0',
      type: "INTEGER"
    }

    const component = {
      type: TypesEnum.VARIABLE,
      value: variable
    }

    this.components.push(component);

    this.setStorage();
    this.audioFeedback?.playEffect('add');

    setTimeout(() => {
      document.getElementById("variable-type-" + (this.components.length - 1))?.focus();
    }, 100);
  }

  addWriter() {
    const writer = {
      type: '',
      value: ''
    };

    const component = {
      type: TypesEnum.WRITER,
      value: writer
    }

    this.components.push(component);

    this.setStorage();
    this.audioFeedback?.playEffect('add');

    setTimeout(() => {
      document.getElementById("write-type-" + (this.components.length - 1))?.focus();
    }, 100);
  }

  addOperator() {
    const operator = {
      name: '',
      value: ''
    };

    const component = {
      type: TypesEnum.OPERATOR,
      value: operator
    }

    this.components.push(component);

    this.setStorage();
    this.audioFeedback?.playEffect('add');

    setTimeout(() => {
      document.getElementById("select-var-" + (this.components.length - 1))?.focus();
    }, 100);
  }

  addConditional() {
    const conditional = {
      condition: {
        value: '',
        components: [],
      },
      nocondition: {
        components: [],
      },
    };

    const component = {
      type: TypesEnum.CONDITIONAL,
      value: conditional
    }

    this.components.push(component);

    this.setStorage();
    this.audioFeedback?.playEffect('add');

    setTimeout(() => {
      document.getElementById("conditional-type-" + (this.components.length - 1) + "-0")?.focus();
    }, 100);
  }


  addFor() {
    const forOperator = {
      variable: '',
      startType: 'VALUE',
      startValue: '0',
      finishType: 'VALUE',
      finishValue: '',
      incrementType: '+',
      incrementValue: '1',
      components: []
    };

    const component = {
      type: TypesEnum.FOR_CODITIONAL,
      value: forOperator
    }

    this.components.push(component);

    this.setStorage();
    this.audioFeedback?.playEffect('add');

    setTimeout(() => {
      document.getElementById("for-select-var-" + (this.components.length - 1))?.focus();
    }, 100);
  }

  setStorage() {
    // TODO: executa toda vez que adiciona um comando
    this.change.emit();
  }

  @HostListener("window:keydown", ["$event"]) onKeyDown(event: KeyboardEvent) {
    const activeEl = document.activeElement;
    const activeMenuOwnerId = activeEl?.closest('[aria-labelledby]')?.getAttribute('aria-labelledby');
    const isInsideAnyCommandButton = activeEl?.closest('app-command-button') !== null;
    const isInsideThisCommandButton = this.elementRef.nativeElement.contains(activeEl);

    // Se o foco estiver dentro do menu (inclusive movido para <body> via container="body")
    // ou dentro de algum command-button, apenas o command-button dono deve disparar.
    // Caso contrário (foco fora), apenas o command-button raiz (mode == 'block') deve disparar.
    if (activeMenuOwnerId) {
      if (activeMenuOwnerId !== this.buttonId) return;
    } else if (isInsideAnyCommandButton) {
      if (!isInsideThisCommandButton) return;
    } else if (this.mode !== 'block') {
      return;
    }

    if (event.altKey && event.code === "Digit1" && this.hasVariables) {
      event.preventDefault();
      this.addVariable();
    }
    if (event.altKey && event.code === "Digit2") {
      event.preventDefault();
      this.addOperator();
    }
    if (event.altKey && event.code === "Digit3") {
      event.preventDefault();
      this.addWriter();
    }
    if (event.altKey && event.code === "Digit4") {
      event.preventDefault();
      this.addConditional();
    }
    if (event.altKey && event.code === "Digit5") {
      event.preventDefault();
      this.addFor();
    }
  }
}
