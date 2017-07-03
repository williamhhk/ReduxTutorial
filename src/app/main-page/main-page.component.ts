import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store'
import {AppStore} from '../app.store'
import { Item } from '../_models/item'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;
  
  constructor(
    private _store : Store <AppStore>
  ) { 
      this.items = _store.select('items');
      this.selectedItem = _store.select('selectedItem');
      this.selectedItem.subscribe(v => console.log(v));
    }

  ngOnInit() {
  }

  addClient(item : Item) {
    console.log(item);
    this._store.dispatch( { type : 'ADD_CLIENT', payload : { hostname : 'test.com', ipaddress : '1.1.1.1', queryType : 'A' }});
    
  }

  selectItem(item)
  {
    this._store.dispatch({type: 'SELECT_ITEM', payload: item});
  }
}
