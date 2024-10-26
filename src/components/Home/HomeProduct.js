import React from "react";

import "../home/HomeProduct.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
export default function HomeProduct(props) {
  const { product } = props;

  return (
    <div className="home-product">
      <Link to={`/products/${product.id}`} >
        <section className="home-cards">
            <div className="home-card-img">
              <img
                src={product.image}
                style={{ width: 70 }}
                alt={product.title}
              />
            </div>
            <div className="home-card-info">
              <span className="card__category"> {product.category}</span>
              <span>
                <Rating
                  name="read-only"
                  value={product.rating.rate}
                  readOnly
                  sx={{ color: "#d09d43" }}
                />
              </span>
            </div>
        </section>
      </Link>
    </div>
  );
}
