import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-hostname-input',
  templateUrl: './hostname-input.component.html',
  styleUrls: ['./hostname-input.component.css']
})
export class HostnameInputComponent implements OnInit {
  @Output() queryHostName  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

 query(text: HTMLInputElement) {
   this.queryHostName.emit(text.value);
 }
}
