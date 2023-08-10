import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
	selector: 'custom-button',
	templateUrl: './button.component.html',
})
export class ButtonComponent {
	@Output() click = new EventEmitter<any>();
	@Input() loading!: boolean;

	handleClick(): void {
		this.click.emit();
	}
}
