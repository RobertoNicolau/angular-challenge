import {Component, Inject} from '@angular/core';

import {ApiService} from './services/api.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	title = 'angular-project-frontend';
	answer = '';
	message = '';
	loading = false;

	constructor(@Inject(ApiService) private readonly api: ApiService) {}

	onClick(): void {
		this.loading = true;

		if (this.answer.length === 0) {
			this.message = 'Digite algo para continuar';
		}

		setTimeout(() => {
			if (this.answer.length > 0) {
				this.api.sendData(this.answer).subscribe(response => {
					this.message = JSON.stringify(response.message);
				}, error => {
					this.message = JSON.stringify(error.response.data.message);
				});
			}

			this.loading = false;
		}, 1500);
	}
}
