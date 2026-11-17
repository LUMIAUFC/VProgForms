import { Component, EventEmitter, HostListener, Input, OnInit, Optional, Output } from '@angular/core';
import { AudioFeedbackService } from '../../core/services/audio-feedback.service';
import { focusFirstDropdownItem } from '../../utils/dropdown-focus.utils';
import { removeOperatorTermAt } from '../../utils/expression-terms.utils';
import { moveIndexedItemDown, moveIndexedItemUp } from '../../utils/reorder.utils';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
  @Input("text") text: boolean = true;
  @Input("back") back: boolean = false;
  @Input("title") title: any;
  @Input("index") index: any;
  @Input("hasToggle") hasToggle: boolean = true;
  @Input("components") components: any[] = [];
  @Input('variables') variables: any;
  @Input('operator') operator: any = {
    reference: '',
    value: ''
  };
  private pressedAlt: boolean = false;

  isHidden: boolean = true;

  private static readonly OPERATOR_LABEL_KEYS: Readonly<Record<string, string>> = {
    '+': 'ACCESSIBLE_MATH.ADD',
    '-': 'ACCESSIBLE_MATH.SUBTRACT',
    '*': 'GENERAL.MULTPLICATION',
    '/': 'ACCESSIBLE_MATH.DIVIDE'
  };

  @Output("remove") remove = new EventEmitter();
  @Output("change") change = new EventEmitter();
  @Output("moveUp") moveUp = new EventEmitter<number>();
  @Output("moveDown") moveDown = new EventEmitter<number>();

  constructor(@Optional() private audioFeedback?: AudioFeedbackService) { }

  ngOnInit(): void {
  }

  changeVariable() {
    this.operator.reference = this.operator.currentVariable.name;
    this.operator.operators = [];

    this.setStorage();
  }

  addOperator(type: string, value: string = "") {
    this.operator.operators.push({
      index: this.operator.operators.length,
      type: type,
      value: value,
    });
    this.changeValue();
    this.audioFeedback?.playEffect('add');

    this.focusOperator(this.operator.operators.length - 1);
  }

  focusOperator(indexOp: any, delayMs: number = 200) {
    setTimeout(() => {
      const operatorElement =
        document.getElementById(`operator-op-${this.index}-${indexOp}`) ??
        document.getElementById(`operator-op1-${this.index}-${indexOp}`);

      if (operatorElement) {
        operatorElement.focus();
      }
    }, delayMs);
  }

  clearOperator(index: number) {
    this.operator.operators = removeOperatorTermAt(this.operator.operators, index);
    this.changeValue();
    this.audioFeedback?.notifyAction('delete', 'ACCESSIBILITY.TERM_REMOVED', undefined, 200);

    if (this.operator.operators.length > 0) {
      const targetIndex = Math.min(index, this.operator.operators.length - 1);
      this.focusOperator(targetIndex, 50);
    } else {
      setTimeout(() => {
        const receiveElement =
          document.getElementById(`operator-receive-${this.index}`) ??
          document.getElementById(`select-var-${this.index}`);
        receiveElement?.focus();
      }, 50);
    }
  }

  getOperatorLabelKey(opValue: string): string {
    return OperatorComponent.OPERATOR_LABEL_KEYS[opValue] ?? 'GENERAL.SELECT_OPERATOR';
  }

  moveOperatorTermUp(index: number): void {
    if (index <= 0) {
      return;
    }
    const movedTerm = this.operator.operators[index]?.value || String(index + 1);
    this.operator.operators = moveIndexedItemUp(this.operator.operators, index);
    this.changeValue();
    this.audioFeedback?.notifyAction('moveUp', 'ACCESSIBILITY.TERM_MOVED_TO_POSITION', {
      term: movedTerm,
      position: index,
      total: this.operator.operators.length
    });
    this.focusOperator(index - 1);
  }

  moveOperatorTermDown(index: number): void {
    if (!Array.isArray(this.operator.operators) || index >= this.operator.operators.length - 1) {
      return;
    }
    const movedTerm = this.operator.operators[index]?.value || String(index + 1);
    this.operator.operators = moveIndexedItemDown(this.operator.operators, index);
    this.changeValue();
    this.audioFeedback?.notifyAction('moveDown', 'ACCESSIBILITY.TERM_MOVED_TO_POSITION', {
      term: movedTerm,
      position: index + 2,
      total: this.operator.operators.length
    });
    this.focusOperator(index + 1);
  }

  clearValue(operator: any) {
    operator.value = "";
    this.setStorage();
  }

  changeValue() {
    this.operator.value = "";
    this.operator.operators.forEach((op: any) => {
      this.operator.value += `${op.value} `;
    });
    this.setStorage();
  }

  changeInputValue(operator: any) {
    switch (this.operator.currentVariable.type) {
      case "INTEGER":
        if (!/^[0-9]+$/.test(operator.value)) {
          operator.value = operator.value.substring(0, operator.value.length - 1);
        }
        break;
      case "DOUBLE":
        if (!/^[+-]?\d+((\.|\,)\d+)?$/.test(operator.value)) {
          let lastCharacter = operator.value.substring(operator.value.length - 1, operator.value.length);

          if (lastCharacter != "." && lastCharacter != ",") {
            operator.value = operator.value.substring(0, operator.value.length - 1);
          }
        }
        break;
      default:
        break;
    }

    this.changeValue();
  }

  getVariables() {
    if (this.operator.currentVariable.type == "DOUBLE") {
      return this.variables.filter((v: any) => v.value.type == 'DOUBLE' || v.value.type == 'INTEGER');
    } else {
      return this.variables.filter((v: any) => v.value.type == this.operator.currentVariable.type);
    }
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
    this.audioFeedback?.playEffect('toggle');

    if (!this.isHidden) {
      setTimeout(() => {
        document.getElementById("operator-cod-" + this.index)?.focus();
      }, 200);
    } else {
      setTimeout(() => {
        document.getElementById("select-var-" + this.index)?.focus();
      }, 200);
    }

  }

  removeOperator() {
    this.remove.emit(this.index);
  }

  focusElement(id: string) {
    setTimeout(() => {
      let operatorElement = document.getElementById(id);

      if (operatorElement) {
        operatorElement.focus();
      }
    }, 200);
  }

  setStorage() {
    this.change.emit();
  }

  compareFn(var1: any, var2: any) {
    return var1 && var2 ? var1.name === var2.name : var1 === var2;
  }

  onAddDropdownOpenChange(isOpen: boolean): void {
    if (isOpen) {
      focusFirstDropdownItem(`dropdownAdd-${this.index}`);
    }
  }
}
