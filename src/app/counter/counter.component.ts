import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store'
import {AppStore} from '../app.store'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
    counter$: Observable<number>;
    constructor(private _store : Store<AppStore>)
    {
        this.counter$ = _store.select('counter')       
    }

    increment(){
        this._store.dispatch({
          type: 'INCREMENT'});
    }

    decrement(){
        this._store.dispatch({
          type: 'DECREMENT'});        
    }
  ngOnInit() {
  }

}
