import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError } from 'rxjs';

interface RequestData {
  url: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  handleError: any;

  constructor(private http: HttpClient) { }

  postData({url, data}: RequestData): Observable<any> {
    url = 'localhost:3333'
    return this.http.post(url, data).pipe(
      catchError(this.handleError('addHero', data))
    );;
  }
}
