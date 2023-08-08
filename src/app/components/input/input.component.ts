import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() answer: string = '';

  constructor() {}
}
