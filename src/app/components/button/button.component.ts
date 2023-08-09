import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output() click = new  EventEmitter<any>();
  handleClick(): void{
    this.click.emit();
  }

  loading: boolean = false;
  show(): void{
    this.loading = !this.loading
  }

}
