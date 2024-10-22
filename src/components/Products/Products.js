import React, { useState } from "react";

import "../Products/Products.css";
import Product from "./Product";
import notfound from "../../Images/error.png";
import CircularProgress from "@mui/material/CircularProgress";
import { IoSearchOutline } from "react-icons/io5";

export default function Products(prop) {
  const [searchInput, setSearchInput] = useState("");

  function onChangeHandler(event) {
    setSearchInput(event.target.value);
  }

  if (prop.loading) {
    return (
      <div className="progress">
        <CircularProgress color="neutral" />
      </div>
    );
  }

  if (prop.error) {
    return (
      <div className="error">
        <h2>404 Not Found</h2>
        <img src={notfound} alt="404" />
      </div>
    );
  }

  const productList = prop.productList.filter((products) =>
    products.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className="product">
      <div class="product-heading">
        <h2>Product</h2>
        <p>Everything you need is here</p>
      </div>
      <div className="search-box">
            <div className="search">
        <form className="form-Searsh">
          <label className="lable-Searsh"><IoSearchOutline /></label>
          <input
            className="input-Searsh"
            type="text"
            onChange={onChangeHandler}
          ></input>
        </form>
      </div>  
      </div>
      <div className="productList">
        {productList.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
