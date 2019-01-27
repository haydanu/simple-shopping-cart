import React, { Fragment } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cartProduct, deleteCart, addAmountCart, totalPrices }) => {
  return (
    <Fragment>
      <Table className="header-fixed" size="sm" responsive>
        <thead>
          <tr>
            <th/>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartProduct.map((product, index) => {
            return (
              <tr key={`cart-item-${index}`}>
                <td>
                  <div
                    className="delete-cart"
                    onClick={() => deleteCart(product)}
                  >
                    <FontAwesomeIcon icon="trash-alt" />
                  </div>
                </td>
                <td>
                  <div className={`image-and-title-cart`}>
                    <img src={product.image} alt={`${product.image}`} />
                    <div>Product {product.id}</div>
                  </div>
                </td>
                <td>${product.price}</td>
                <td className="quantity-cart-container">
                  <small onClick={() => deleteCart(product)}> - </small>
                  <div className="quantity-cart">{product.quantity}</div>
                  <small onClick={() => addAmountCart(product)}> + </small>
                </td>
                <td>$ {product.quantity * product.price}</td>
              </tr>
            );
          })}
        </tbody>
        <tbody>
        <tr>
        <td colSpan="5" className='total-price-cart'>$ {totalPrices}</td>
        </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Cart;
