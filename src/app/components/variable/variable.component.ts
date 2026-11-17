import { Component, Input, OnInit, Optional, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select/public-api';
import { AudioFeedbackService } from '../../core/services/audio-feedback.service';
import { normalizeNumericFallback } from '../../utils/reorder.utils';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit {
  @Input("text") text: boolean = true;
  @Input("title") title: any;
  @Input("index") index: any;
  @Input("hasToggle") hasToggle: boolean = true;
  @Input("variable") variable: any;
  @Input("components") components: any[] = [];
  @Input("variables") variables: any[] = [];
  @Output("remove") remove = new EventEmitter();
  @Output("change") change = new EventEmitter();
  @Output("moveUp") moveUp = new EventEmitter<number>();
  @Output("moveDown") moveDown = new EventEmitter<number>();
  @Output("rename") rename = new EventEmitter<{ oldName: string; newName: string }>();

  @ViewChild('ngSelect') ngSelect!: NgSelectComponent;

  isHidden: boolean = true;
  private lastCommittedName: string = '';

  constructor(@Optional() private audioFeedback?: AudioFeedbackService) { }

  ngOnInit(): void {
    this.lastCommittedName = String(this.variable?.name ?? '').trim();
    this.focusElement(`variable-type-${this.index}`)
    // setTimeout(() => {
    //   this.ngSelect.focus();
    // }, 200);
  }

  removeVariable() {
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

  changeType() {
    if (this.variable.type == "STRING") {
      this.variable.value = "";
    } else if (this.variable.type == "INTEGER" || this.variable.type == "DOUBLE") {
      this.variable.value = 0;
    } else {
      this.variable.value = "verdadeiro";
    }

    this.setStorage();

    // this.focusElement(`variable-name-${this.index}`)
  }
  
  toggleHidden(){
    this.isHidden = !this.isHidden;
    this.audioFeedback?.playEffect('toggle');

    if(!this.isHidden){
      setTimeout(() => {
        document.getElementById("variable-cod-" + this.index)?.focus();
      }, 200);
    }
    else{
      setTimeout(() => {
        document.getElementById("variable-type-" + this.index)?.focus();
      }, 200);
    }
  }

  onNameChange(): void {
    const newName = String(this.variable?.name ?? '').trim();
    if (this.lastCommittedName && newName && this.lastCommittedName !== newName) {
      this.rename.emit({ oldName: this.lastCommittedName, newName });
    }
    this.lastCommittedName = newName;
    this.setStorage();
  }

  ensureNumericValue(): void {
    if (this.variable.type === 'INTEGER' || this.variable.type === 'DOUBLE') {
      this.variable.value = normalizeNumericFallback(this.variable.value);
      this.setStorage();
    }
  }

  setStorage() {
    this.change.emit();
  }

  @HostListener("document:keyup", ["$event"]) onKeyUp(event: KeyboardEvent) {
    if (event.code == "13") {
      alert(event);
      // this.focusOperator(this.operators.length - 1);
      // this.pressedAlt = false;
    }
  }
}
