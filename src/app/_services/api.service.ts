import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response } from '@angular/http';
import { Todo } from '../_models/todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;
const API_URL1 = environment.apiUrl1;
@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllMixed(): Observable<any[]> {

    return this.http
      .get(API_URL1 + '/assets')
      .map(response => {
        const assets = response.json();
        console.log(assets.user);
        console.log(assets.admin);
      })
      .catch(this.handleError);
  }


  public getAllTodos(): Observable<Todo[]> {
//https://jaxenter.com/reactive-programming-http-and-angular-2-124560.html
//  Long polling
  // return Observable
  //        .interval(1000)
  //        .flatMap(() => 
  //        {
  //           return this.http
  //             .get(API_URL + '/todos')
  //             .map(response => {
  //             const todos = response.json();
  //             return todos.map((todo) => new Todo(todo));
  //             })
  //             .catch(this.handleError);
  //        });

    return this.http
      .get(API_URL + '/todos')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}