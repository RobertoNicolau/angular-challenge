import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() answer!: string;

  @Output() changeValueEvent: any = new EventEmitter();

  changeValue(): void {
    this.changeValueEvent.emit();
  }
  constructor() { }
}
