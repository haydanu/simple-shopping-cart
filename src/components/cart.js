import React from "react";
import { Row, Col } from "reactstrap";

const Cart = ({ cartProduct, deleteCart, addAmountCart }) => {
  return (
    cartProduct.map((product, index) => {
      return (
        <div
        key={`cart-item-${index}`}
        className={`image-${product.id}`}>
          <img src={product.image} alt={`${product.image}`} />

          <div className="cartProduct-info">
            <Row>
              <Col md={6}>
                <div className={`title-and-price`}>
                  <div>cartProduct {product.id}</div>
                  <div>${product.price}</div>
                  <div>
                    <small onClick={() => deleteCart(product)}> - </small>
                    {product.quantity}
                    <small onClick={() => addAmountCart(product)}> + </small>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div onClick={() => deleteCart(product)}>x</div>
              </Col>
            </Row>
          </div>
        </div>
      )
    })
  );
};

export default Cart;
