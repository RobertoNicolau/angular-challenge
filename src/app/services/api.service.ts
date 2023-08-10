import {Injectable} from '@angular/core';
import axios from 'axios';
import {Observable} from 'rxjs';

type Request = {
	data: any;
	url: string;
};

@Injectable({
	providedIn: 'root',
})

export class ApiService {
	url = 'http://localhost:3333/answer';

	sendData(answer: string): Observable<any> {
		const data = {answer};

		return new Observable(observer => {
			axios.post<Request>(this.url, data)
				.then(response => {
					observer.next(response.data);
					observer.complete();
				})
				.catch(error => {
					observer.error(error);
					console.table(error.response.data);
					observer.complete();
				});
		});
	}

	async get() {
		return axios.get(this.url);
	}
}
