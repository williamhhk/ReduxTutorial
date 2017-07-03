import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpModule } from '@angular/http'

// Components
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { routeConfig } from './app.route';
import { MainPageComponent } from './main-page/main-page.component';
import { HostnameInputComponent } from './hostname-input/hostname-input.component';

// Services 
import { DnsClientService} from './_services/dns-client.service';
import { CounterComponent } from './counter/counter.component';

// Reducers
import { counter } from './_reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    MainPageComponent,
    HostnameInputComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    StoreModule.provideStore({counter}),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    HttpModule,    
  ],
  providers: [DnsClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
