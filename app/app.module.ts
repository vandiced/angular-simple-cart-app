import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// import { MyShopComponent }  from './my-shop.component';
// import { MyMoviesComponent }  from './my-movies.component';
// import { CartComponent }  from './cart.component';

import { AppRoutingModule, routingComponents } from './app.routing';

@NgModule({
  imports: [
	BrowserModule,
	AppRoutingModule
  ],
  declarations: [
  	AppComponent,
  	routingComponents
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

