import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store'
import {AppStore} from '../app.store'
import { Item } from '../_models/item'
import {DnsClientService} from '../_services/dns-client.service'
import { Subscription } from 'rxjs/Subscription';
import {ApiMockService} from '../api-mock.service'

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


  // itemState$: Observable<Item[]>;
  // private itemStateSubscription: Subscription;
  // itemTag: Item[];
  // done = false;


  constructor(
    private _dnsClientService : DnsClientService,
    private _apiMockService : ApiMockService,
    private _store : Store <AppStore>
  ) {
    
      // this.items = _store.select(state=>state.itemsState);
      
      // this.itemState$ = _store.select(state=>state.itemsState);

      this.items = _store.select(state=>state.itemsState).
      combineLatest(_store.select(state=>state.visibilityState),
      (itemsState, visibilityState) => {

        // Test out filter
//        return itemsState.filter(client=>client.hostname == 'www.cnn.com');

        // Always true
        return itemsState.filter(visibilityState);
      })
      ;
      this.selectedItem = _store.select(state=>state.selectedItemState);
      this.items.subscribe(log=>console.log(log));
      this.selectedItem.subscribe(log=>console.log(log));    

    }

  ngOnInit() {

    // this.itemStateSubscription = this.itemState$.subscribe((state) => {
    //   this.itemTag = state;
    // });    
    this._apiMockService.getAllTodos()

    .subscribe(
        (todos) => {
          // map belong to Array
          todos.map((todo) => console.log(todo))
        }
      );
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
