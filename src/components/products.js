import React from "react";
import { Row, Col } from "reactstrap";

const Products = ({ product, addToCart }) => {
  return (
    <div className={`image-${product.id}`}>
      <img src={product.image} alt={`${product.image}`} />

      <div className="product-info">
        <Row>
          <Col md={4}>
            <div className={`group-title-and-price`}>
              <div className="title">product {product.id}</div>
              <div className="price">${product.price}</div>
            </div>
          </Col>
          <Col md={8} className="centering-add-to-cart">
            <div onClick={() => addToCart(product)} className="add-to-cart-button">add to cart</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Products;
