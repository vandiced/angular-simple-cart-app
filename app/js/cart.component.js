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
var CartComponent = (function () {
    function CartComponent() {
        this.times = 0;
        this.cart = JSON.parse(localStorage.getItem('cartItems'));
    }
    CartComponent.prototype.mouseClickedMe = function () {
        this.times++;
    };
    ;
    CartComponent.prototype.removeFromCart = function (movie) {
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
    ;
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            templateUrl: './app/templates/cart.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map