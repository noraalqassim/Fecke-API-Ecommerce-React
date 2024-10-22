import React from "react";

import "../Products/Product.css";
import { Link } from "react-router-dom";

export default function Product(prop) {
  const product = prop.product;
  return (
    <div className="product-box">
      <a href="#" class="product-img">
        <img src={product.image} alt={product.title} />
        {/*<span>New</span>*/} {/* For new product */}
        <button class="product-cart-but">
          <i class="fas fa-shopping-cart"></i> Add To Cart
        </button>
      </a>
      <div class="product-text">
        <a href="#" class="product-title">
          {product.title}
        </a>
        <span>${product.price}</span>
        {/* <p>{prop.propName.description}</p> */}
        <Link to={`${product.id}`}>
          <button>More details...</button>
        </Link>
      </div>
    </div>
  );
}
