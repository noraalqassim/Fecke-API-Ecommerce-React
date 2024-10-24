import React from "react";

import "./Products.css";
import Product from "./Product";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "../error/Error";
import Search from "../search/Search";

export default function Products(prop) {
  const { productList, userInput, setUserInput, wishList, setWishList, cartItem, setCartItem} = prop;

  const result = productList.filter((product) =>
    product.title.toLowerCase().includes(userInput.toLowerCase())
  );

  let products = productList;
  if (userInput) {
    products = result;
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
      <div>
        <Error />
      </div>
    );
  }
  return (
    <div className="product">
      <section>
      <div class="product-heading">
        <h2>Product</h2>
        <p>Everything you need is here</p>
      </div>
      <Search setUserInput={setUserInput} /> 
      </section>
      <div className="productList">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              wishList={wishList}
              setWishList={setWishList}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          );
        })}
      </div>
    </div>
  );
}
