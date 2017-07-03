import { Component, OnInit , Input} from '@angular/core';
import { Item } from '../_models/item'

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

  selectedItem: Item;

  @Input() set item(value: Item){
      this.selectedItem = Object.assign({}, value);
  }

  constructor() { }

  ngOnInit() {
  }

}
