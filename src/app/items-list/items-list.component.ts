import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../_models/item'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
    @Output() selected = new EventEmitter();
    @Output() deleteSelected = new EventEmitter();
    @Input() itemsFromMain: Item[];

    // http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/
    constructor(){}
    ngOnInit() {}
}
