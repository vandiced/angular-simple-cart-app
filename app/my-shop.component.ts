import { Component } from '@angular/core';

@Component({
  selector: 'my-shop',
  templateUrl: './app/templates/my-shop.html' 
})
export class MyShopComponent {
	public name = 'Ramon';
	public times = 0;
	public premiumAccount = true;
	public recentMovie = "None";
	public cart = [];
	public movieList = [
		{
			name: 'Civil War',
			imageUrl: 'http://www.cosmicbooknews.com/sites/default/files/civilwarposterimh.jpg'
		},
		{
			name: 'Deadpool',
			imageUrl: 'http://www.space.ca/wp-content/uploads/2016/09/deadpool.jpg'
		},
		{
			name: 'Kubo',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Kubo_and_the_Two_Strings_poster.png'
		}
	];

	mouseClickedMe() {
		this.times++;
	};

	selectedMovie(movie) {
		this.recentMovie = movie;

		// add movie to cart ony if it is not already in cart
		if (!this.cart.includes(movie)) {
			this.cart.push(movie);
			localStorage.cartItems = JSON.stringify(this.cart);
			//alert(movie + ' movie added to cart');
		} else {
			//alert(movie + ' already in cart');
		}

	};
}

