import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  private url = 'http://api.icndb.com/jokes/random';
  constructor(private http: HttpClient) { }

  getJoke(): Observable<any> {
    return this.http
        .get(this.url, {responseType: 'json'})
        .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json() || 'Server error');
  }
}
