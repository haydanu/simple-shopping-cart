import React, { Component } from "react";
import data from "./data";

import Products from "./products";

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
        console.log(item);
        if (item.id === data.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    } else {
      cartItems.push(newObjItem);
    }

    this.setState({
      cartItems
    }, console.log(this.state));
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
        </div>
      </div>
    );
  }
}

export default SaleProducts;
