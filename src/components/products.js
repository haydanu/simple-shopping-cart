import React from "react";
import { Row, Col } from "reactstrap";

const Products = ({ product, addToCart }) => {
  return (
    <div className={`image-${product.id}`}>
      <img src={product.image} alt={`${product.image}`} />

      <div className="product-info">
        <Row>
          <Col md={6}>
            <div className={`title-and-price`}>
              <div>product {product.id}</div>
              <div>${product.price}</div>
            </div>
          </Col>
          <Col md={6}>
            <div onClick={() => addToCart(product)}>add to cart</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Products;
