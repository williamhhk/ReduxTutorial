import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DnsClientService {

  //  Clients 

  constructor (private http : Http) {
  }

  getAsync(hostName : string) {
    return this.http.get(`http://localhost:59604/api/dnsclient/${hostName}/a`);
  }

  put() {}
  post() {}
  delete() {}

}
