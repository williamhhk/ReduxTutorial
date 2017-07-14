import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../_services/api.service'
import { Todo } from '../_models/todo';


@Component({
  selector: 'app-json-server-page',
  templateUrl: './json-server-page.component.html',
  styleUrls: ['./json-server-page.component.scss']
})
export class JsonServerPageComponent implements OnInit {

  todos : Array <Todo>;
  todosAsync : Observable<Todo[]>;
  constructor(
    private apiService : ApiService

  ) { }

  ngOnInit() {

    this.apiService.getAllMixed().subscribe(data=>
    {
      console.log(data);
    }
    );
    this.todosAsync = this.apiService.getAllTodos();
    this.apiService.getAllTodos().subscribe(data=>
    {
      this.todos=data;
    }
    );
  }

}
