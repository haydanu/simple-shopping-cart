import React, { Component } from "react";
import data from "./data";
import { Container } from "reactstrap";

import Products from "./products";
import Cart from "./cart";

class SaleProducts extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
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
    }, 3000);
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

    this.setState({
      cartItems
    });

    let cartItemsCount = this.state.cartItemsCount + 1;
    this.setState({ cartItemsCount: cartItemsCount });

    let total = this.state.cartTotal + 1 * data.price;
    this.setState({ cartTotal: total });
  };

  removeItemFromCart = currentItem => {
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

    let total = this.state.cartTotal - 1 * data.price;
    this.setState({ cartTotal: total });
  };

  handleHover = currentItem => {
    let cartItems = this.state.cartItems;
    const alreadyExists = cartItems.find(
      product => product.id === currentItem.id
    );

    if(alreadyExists){ this.setState({
      isHovered: !this.state.isHovered
    }) }
  };

  render() {
    return (
      <Container>
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
                    handleHover={this.handleHover}
                    isHovered={this.state.isHovered}
                  />
                );
              })
            )}
          </div>

          <div className="cart">
            <div className="cart-title">
              SHOPPING CART -{" "}
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
        </div>
      </Container>
    );
  }
}

export default SaleProducts;
