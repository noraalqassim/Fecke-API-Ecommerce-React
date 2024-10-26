import React, {useEffect } from "react";

import "./Product.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import Rating from "@mui/material/Rating";

export default function Product(prop) {
  const { product, wishList, setWishList } = prop;

  const isFavorited = wishList.some((item) => item.id === product.id);

  useEffect(() => {
    const storedWishList = localStorage.getItem("wishList");
    const storedIsFavorited = localStorage.getItem("isFavorited");

    if (storedWishList) {
      setWishList(JSON.parse(storedWishList));
    }
  }, []);

  function addToFav(product) {
    const isInclude = wishList.some((item) => item.id === product.id);
    if (!isInclude) {
      const updatedWishList = [...wishList, product];
      setWishList(updatedWishList);

      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
      localStorage.setItem("isFavorited", JSON.stringify(true));
    } else {
      if (isInclude) {
        const updatedWishList = wishList.filter(
          (item) => item.id !== product.id
        );
        setWishList(updatedWishList);

        localStorage.setItem("wishList", JSON.stringify(updatedWishList));
      }
    }
  }

  return (
    <div className="card-item">
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
        <Rating
          name="read-only"
          value={product.rating.rate}
          readOnly
          sx={{ color: "#d09d43" }}
        />
        <div className="botton-details">
          <div className="price"> ${product.price}</div>
          <div className="wishList">
            <a
              onClick={() => addToFav(product)}
              style={{ color: isFavorited ? "#85654d" : "#BF9270" }}
            >
              <FaHeart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
