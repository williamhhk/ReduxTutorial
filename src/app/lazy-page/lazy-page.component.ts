import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.scss']
})
export class LazyPageComponent implements OnInit {

  user1: Observable<{}>;
  user2: {};
  user3: {};
  subscription: Subscription;


  constructor() { }
  
ngOnInit() {     
   // Using ngIf ngElse
    this.user1 = this.getAsyncData();
    
    // Using just async pipe
    this.user2 = this.getAsyncData().share();
    
    // Manual subscription handling
    this.subscription = this.getAsyncData().subscribe(u => this.user3 = u);
  }

  ngOnDestroy() {
    // Only need to unsubscribe if its a multi event Observable
    // Manual 
    //this.subscription.unsubscribe();
  }

  getAsyncData() {
     // Fake Slow Async Data
    return Observable.of({
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 65,
      height: 172,
      mass: 77,
      homeworld: 'Tatooine'
    }).delay(1000);
  }


}
