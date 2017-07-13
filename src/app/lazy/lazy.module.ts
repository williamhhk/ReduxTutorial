import { NgModule } from '@angular/core';

//  Need common module or else error
import { CommonModule } from '@angular/common';
import { LazyPageComponent }from '../lazy-page/lazy-page.component'
import { routing } from '../lazy.routing';


@NgModule({
  imports: [
    routing,
    CommonModule,       
    ],
  declarations: [LazyPageComponent]
})
export class LazyModule { }
