import React, { Fragment } from "react";
import { Table } from "reactstrap";

const Cart = ({ cartProduct, deleteCart, addAmountCart, totalPrices }) => {
  return cartProduct.map((product, index) => {
    return (
      <Fragment key={`cart-item-${index}`}>
        <Table>
          <thead>
            <tr>
              <th />
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div onClick={() => deleteCart(product)}>x</div>
              </td>
              <td>
                <img src={product.image} alt={`${product.image}`} />
                <div>Product {product.id}</div>
              </td>
              <td>${product.price}</td>
              <td>
                <small onClick={() => deleteCart(product)}> - </small>
                {product.quantity}
                <small onClick={() => addAmountCart(product)}> + </small>
              </td>
              <td>{product.quantity * product.price}</td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  });
};

export default Cart;
