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
import { ItemsListComponent } from './items-list/items-list.component';

// Services 
import { DnsClientService} from './_services/dns-client.service';
import { CounterComponent } from './counter/counter.component';

// Reducers
import { counterReducer } from './_reducers/counter.reducer';
import { itemsReducer } from './_reducers/items.reducer';
import { selectedItemReducer} from './_reducers/selectedItem.reducer'
import { ItemInfoComponent } from './item-info/item-info.component';
import { appStore } from './app.store';
import { FilterSelectComponent } from './filter-select/filter-select.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    MainPageComponent,
    HostnameInputComponent,
    CounterComponent,
    ItemsListComponent,
    ItemInfoComponent,
    FilterSelectComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    StoreModule.provideStore(appStore),
//    StoreModule.provideStore({itemsReducer,selectedItemReducer,counterReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    HttpModule,    
  ],
  providers: [DnsClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }


