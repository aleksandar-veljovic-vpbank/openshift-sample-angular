import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Person } from './person';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  
  getPersonHandlerSubscriber() {
    return this.http.get<any>(environment.apiurl + "/rest/sample-service/all-persons");
  }
}
