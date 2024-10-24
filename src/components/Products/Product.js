import React, { useState } from "react";

import "./Product.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import Rating from "@mui/material/Rating";

export default function Product(prop) {
  const { product, wishList, setWishList } = prop;

  const [isFavorited, setIsFavorited] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  function addToFav(product) {
    const isInclude = wishList.some((item) => item.id === product.id);
    if (!isInclude) {
      setWishList([...wishList, product]);
      setIsFavorited(true);
      setOpen(true);
    }
  }


  return (
    <div className="card">
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
              style={{ color: isFavorited ? "#85654d" : "#BF9270"  }}
            >
              <FaHeart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
