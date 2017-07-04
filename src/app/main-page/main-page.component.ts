import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store'
import {AppStore} from '../app.store'
import { Item } from '../_models/item'
import {DnsClientService} from '../_services/dns-client.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  items1$: Observable<any>;
  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;
  model;

  constructor(
    private _dnsClientService : DnsClientService,
    private _store : Store <AppStore>
  ) {
    
      this.items = _store.select(state=>state.itemsState);
      this.selectedItem = _store.select(state=>state.selectedItemState);
      this.items.subscribe(log=>console.log(log));
      this.selectedItem.subscribe(log=>console.log(log));    
      
    }

  ngOnInit() {
  }

  addClient(item) {

    this.items1$ = this._dnsClientService.getAsync(item)
    .map(response=>
    {
      console.log(response.json().value.IPAddress);
      return response.json().value;
    }
    );

    //  Put this all in a service ...
    this._dnsClientService.getAsync(item)
    .map(response=>
    {
      //console.log(response);
      return response.json().value;
    }
    )
    .map(payload=>  ({ type: 'ADD_CLIENT', payload }))
    .subscribe(action =>{
//        console.log(action);
        this._store.dispatch(action);
    },
    (err)=>
    {
      console.log(err)
      return err;
    }
    );
  }

  selectItem(item)
  {
    this._store.dispatch({type: 'SELECT_ITEM', payload: item});
  }

  deleteItem(item)
  {
    this._store.dispatch({type: 'DELETE_CLIENT', payload: item});
  }

  updateFilter(filter){
    console.log(filter);
  }
}
