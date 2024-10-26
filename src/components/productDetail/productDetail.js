import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./productDetail.css";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "../error/Error";
export default function ProductDetail() {
  const { productId } = useParams();

  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItem, setCartItem] = useState([]);

  const productDetailUrl = `https://fakestoreapi.com/products/${productId}`;

  function fetchProductDetail() {
    axios
      .get(productDetailUrl)
      .then((response) => {
        setProductDetail(response.data);
        setLoading(false);
      })

      .catch((error) => {
        setError("Error");
        setLoading(true);
      });
  }

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  if (loading) {
    return (
      <div className="progress">
        <CircularProgress color="neutral" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div>
      <div className="wrapper-product">
        <div className="product-img">
          <img
            src={productDetail.image}
            style={{ width: 160 }}
            alr={productDetail.title}
          />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{productDetail.title}</h1>
            <h2>{productDetail.category}</h2>
            <p>{productDetail.description}</p>
          </div>
          <div className="product-price-btn">
            <p> {productDetail.price} $</p>
            <button type="button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
