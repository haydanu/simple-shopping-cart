// @flow
import React, { Component } from "react";
import { Container } from "reactstrap";
import Typist from "react-typist";

import data from "./data";
import Products from "./products";
import Cart from "./cart";

type Props = {
  /* ... */
};

type State = {
  isLoading: boolean,
  data: Array<{
    id: number,
    image: string,
    price: number,
    currency: string,
    name: string
  }>,
  cartItems: Array<{
    id: number,
    image: string,
    price: number,
    currency: string,
    name: string,
    quantity: number
  }>,
  cartTotal: number,
  cartItemsCount: number
};

class SaleProducts extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: data,
      cartItems: [],
      cartTotal: 0,
      cartItemsCount: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 4000);
  }

  addToCart = (data: any): void => {
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

    this.setState({
      cartItems
    });

    let cartItemsCount = this.state.cartItemsCount + 1;
    this.setState({ cartItemsCount: cartItemsCount });

    let total = this.state.cartTotal + 1 * data.price;
    this.setState({ cartTotal: total }, console.log(this.state));
  };

  removeItemFromCart = (currentItem: any): void => {
    let cartItems = this.state.cartItems;
    const alreadyExists = cartItems.find(
      product => product.id === currentItem.id
    );

    if (alreadyExists) {
      cartItems = cartItems
        .map(item => {
          if (item.id === currentItem.id) {
            item.quantity--;
          }
          return item;
        })
        .filter(cartItem => cartItem.quantity > 0);
    }

    this.setState({
      cartItems
    });

    let cartItemsCount = this.state.cartItemsCount - 1;
    this.setState({ cartItemsCount: cartItemsCount });

    let total = this.state.cartTotal - 1 * currentItem.price;
    this.setState({ cartTotal: total }, console.log(this.state));
  };

  render() {
    return (
      <Container>
        <div className="products">
          <div className="group-images">
            {this.state.isLoading ? (
              <div className="loading-page">
                <Typist>LOADING . . . Please wait . . .</Typist>
              </div>
            ) : (
              this.state.data.map((data, index) => {
                return (
                  <Products
                    key={`images-${data.image}-${index}`}
                    product={data}
                    addToCart={this.addToCart}
                  />
                );
              })
            )}
          </div>

          <div className="cart">
            {this.state.isLoading ? (
              ""
            ) : (
              <div>
                <div className="cart-title">
                  SHOPPING CART -
                  {this.state.cartItemsCount <= 1
                    ? `${this.state.cartItemsCount} ITEM`
                    : `${this.state.cartItemsCount} ITEMS`}
                </div>
                <div>
                  {this.state.cartItems.length <= 0 ? (
                    <div>There is no cart yet</div>
                  ) : (
                    <Cart
                      cartProduct={this.state.cartItems}
                      deleteCart={this.removeItemFromCart}
                      addAmountCart={this.addToCart}
                      totalPrices={this.state.cartTotal}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default SaleProducts;
