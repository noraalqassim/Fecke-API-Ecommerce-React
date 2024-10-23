import React from "react";

import "./Product.css";
import { Link } from "react-router-dom";

export default function Product(prop) {
  const { product, wishList, setWishList } = prop;

  function addToFav(product) {
    setWishList([...wishList, product]);
  }

  return (
    <div className="product-box">
      <a href="#" class="product-img">
        <img src={product.image} alt={product.title} />
        <button className="product-cart-but">
          <i className="fas fa-shopping-cart"></i> Add To Cart
        </button>
      </a>
      <div className="product-text">
        <a href="#" class="product-title">
          {product.title}
        </a>
        <span>${product.price}</span>
        <Link to={`${product.id}`}>
          <button>More details...</button>
        </Link>
        <button onClick={() => addToFav(product)}>Add to fav </button>
      </div>
    </div>
  );
}
