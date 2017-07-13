import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component'
import { MainPageComponent } from './main-page/main-page.component'
import { CounterComponent } from './counter/counter.component'


export const routeConfig: Routes = [
    { path:'about', component: AboutPageComponent },
    { path:'query', component: MainPageComponent },
    { path:'counter', component: CounterComponent },
    // { path:'lazy', component: LazyPageComponent },

     { path:'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
    
];

