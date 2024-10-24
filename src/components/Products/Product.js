import React from "react";

import "./Product.css";
import { Link } from "react-router-dom";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi2";

export default function Product(prop) {
  const { product, wishList, setWishList, cartItem, setCartItem } = prop;

  function addToFav(product) {
    const isInclude = wishList.some((item) => item.id === product.id);
    if (!isInclude) {
      setWishList([...wishList, product]);
    }
  }

  function addToCart(product) {
    setCartItem([...cartItem, product]);
  }

  return (
    <div className="card">
      <div className="wishlist" onClick={() => addToFav(product)}>
        <FaHeartCirclePlus />
      </div>
      <div className="tumb">
        <img style={{ width: 160 }} src={product.image} alt={product.title} />
      </div>
      <div className="details">
        <span className="category">{product.category}</span>
        <h4>
          <Link to={`${product.id}`}>
            <a href="">{product.title}</a>
          </Link>
        </h4>
        <div className="botton-details">
          <div className="price"> ${product.price}</div>
          <div className="links">
            <a onClick={() => addToCart(product)}>
              <HiShoppingCart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
