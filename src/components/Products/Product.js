import React from "react";

import "../Products/Product.css";

export default function Product(prop) {
  console.log(prop);
  return (
    <div className="product-box">
      <a href="#" class="product-img">
        <img src={prop.propName.image} alt={prop.propName.title} />
        {/*<span>New</span>*/} {/* For new product */}
        <button class="product-cart-but">
          <i class="fas fa-shopping-cart"></i> Add To Cart
        </button>
      </a>
      <div class="product-text">
        <a href="#" class="product-title">
          {prop.propName.title}
        </a>
        <span>${prop.propName.price}</span>
        {/* <p>{prop.propName.description}</p> */}
      </div>
    </div>
  );
}
