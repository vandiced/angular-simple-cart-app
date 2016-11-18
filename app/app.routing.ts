import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyShopComponent } from './my-shop.component';
import { MyMoviesComponent }  from './my-movies.component';
import { CartComponent } from './cart.component';

const routes: Routes =  [
	{ path: '', pathMatch: 'full', redirectTo: 'my-shop' },
	{ path: 'my-shop', component: MyShopComponent },
	{ path: 'cart', component: CartComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
	MyShopComponent,
	MyMoviesComponent,
	CartComponent
];