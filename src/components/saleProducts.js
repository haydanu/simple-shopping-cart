import React, { Component } from "react";
import data from "./data";

import Products from "./products";
import Cart from "./cart";

class SaleProducts extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: data,
      cartItems: []
    };
  }

  addToCart = data => {
    let cartItems = this.state.cartItems;
    const alreadyExists = cartItems.find(product => product.id === data.id);
    let newObjItem = {};
    newObjItem.id = data.id;
    newObjItem.image = data.image;
    newObjItem.price = data.price;
    newObjItem.currency = data.currency;
    newObjItem.quantity = 1;

    if (alreadyExists) {
      cartItems = cartItems.map(item => {
        if (item.id === data.id) {
          item.quantity++;
        }
        return item;
      });
    } else {
      cartItems.push(newObjItem);
    }

    this.setState(
      {
        cartItems
      },
      console.log(this.state)
    );
  };

  removeItemFromCart = currentItem => {
    let cartItems = this.state.cartItems;
    const alreadyExists = cartItems.find(product => product.id === currentItem.id);

    if (alreadyExists) {
      cartItems = cartItems.map(item => {
        if (item.id === currentItem.id) {
          item.quantity--;
        }
        return item;
      }).filter(cartItem => cartItem.quantity > 0);
    }

    this.setState({
      cartItems
    });
  };

  render() {
    return (
      <div className="products">
        <div className="group-images">
          {this.state.isLoading ? (
            <div>wait a moment ...</div>
          ) : (
            this.state.data.map((data, index) => {
              return (
                <Products
                  key={`images-${data.images}-${index}`}
                  product={data}
                  addToCart={this.addToCart}
                />
              );
            })
          )}
        </div>

        <div className="cart">
          <div className="cart-title">SHOPPING CART</div>
          <div>
            {this.state.cartItems.length <= 0 ? (
              <div>There is no cart yet</div>
            ) : (
              <Cart
                cartProduct={this.state.cartItems}
                deleteCart={this.removeItemFromCart}
                addAmountCart={this.addToCart}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SaleProducts;
