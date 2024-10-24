import React, { useState } from "react";

import "./Products.css";
import Product from "./Product";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "../error/Error";
import Search from "../search/Search";
import Filter from "../filter/Filter";

export default function Products(prop) {
  const { productList, userInput, setUserInput, wishList, setWishList } = prop;

  const [selectedCategories, setSelectedCategories] = useState([]);

  const result = productList.filter((product) =>
    product.title.toLowerCase().includes(userInput.toLowerCase())
  );

  const filteredProducts = selectedCategories.length
    ? productList.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : result;

  let products = productList;
  if (userInput) {
    products = result;
  } else {
    products = filteredProducts;
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

  const categories = Array.from(new Set(productList.map((product) => product.category)));

  return (
    <div className="product">
      <section>
        <div class="product-heading">
          <h2>Product</h2>
          <p>Everything you need is here</p>
        </div>
        <Search setUserInput={setUserInput} />
        <Filter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          categories={categories}
        />
      </section>
      <div className="productList">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              wishList={wishList}
              setWishList={setWishList}
            />
          );
        })}
      </div>
    </div>
  );
}
