"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyShopComponent = (function () {
    function MyShopComponent() {
        this.name = 'Ramon';
        this.times = 0;
        this.premiumAccount = true;
        this.recentMovie = "None";
        this.cart = [];
        this.movieList = [
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
    }
    MyShopComponent.prototype.mouseClickedMe = function () {
        this.times++;
    };
    ;
    MyShopComponent.prototype.selectedMovie = function (movie) {
        this.recentMovie = movie;
        // add movie to cart ony if it is not already in cart
        if (!this.cart.includes(movie)) {
            this.cart.push(movie);
            localStorage.cartItems = JSON.stringify(this.cart);
        }
        else {
        }
    };
    ;
    MyShopComponent = __decorate([
        core_1.Component({
            selector: 'my-shop',
            templateUrl: './app/templates/my-shop.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MyShopComponent);
    return MyShopComponent;
}());
exports.MyShopComponent = MyShopComponent;
//# sourceMappingURL=my-shop.component.js.map