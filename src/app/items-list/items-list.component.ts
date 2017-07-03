import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import {Store} from '@ngrx/store'
import {AppStore} from '../app.store'
import { Item } from '../_models/item'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

    //  @Input() items = Observable.of([]);
     @Output() selectedItem = new EventEmitter();
    // @Input() items: Observable<Array<Item>>;

    @Input() items: Item[];

    // http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/
    constructor(private store: Store<AppStore>) {
 //     this.items = store.select('items'); // Bind an observable of our items to "ItemsService"
    }

    ngOnInit() {
    }
}
