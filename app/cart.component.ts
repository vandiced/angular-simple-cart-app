import { Component } from '@angular/core';

@Component({
	selector: 'cart',
	templateUrl: './app/templates/cart.html'
})
export class CartComponent {
	public times = 0;
	public cart = JSON.parse(localStorage.getItem('cartItems'));
	
	mouseClickedMe() {
		this.times++;
	};

	removeFromCart(movie) {
		//console.log(movie);

		var index = this.cart.indexOf(movie);
		if (index > -1) {
			console.log(index);
			console.log(this.cart);
		    this.cart = this.cart.splice(1, 1);
		    console.log(this.cart);
		}

		localStorage.cartItems = JSON.stringify(this.cart);
		//console.log(this.cart);
	};
}