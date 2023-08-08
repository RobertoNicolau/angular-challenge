import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output() clicked = new  EventEmitter<void>();

  sendAnswer(){
    this.clicked.emit();
  }

}
