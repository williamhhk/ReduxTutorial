import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-hostname-input',
  templateUrl: './hostname-input.component.html',
  styleUrls: ['./hostname-input.component.css']
})
export class HostnameInputComponent implements OnInit {
  fdqn : string;
  @Output() queryHostName  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  queryByTwoWay(fdqn) {

    this.queryHostName.emit(fdqn);
  }

  query(text: HTMLInputElement) {

    this.queryHostName.emit(text.value);
  }
}
