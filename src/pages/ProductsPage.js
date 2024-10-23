import React from "react";

import Products from "../components/Products/Products";
import Search from "../components/search/Search";
function ProductsPage(prop) {
  const { productList, setUserInput, userInput, wishList, setWishList } = prop;
  return (
    <div>
      <Products
        productList={productList}
        userInput={userInput}
        setUserInput={setUserInput}
        wishList={wishList}
        setWishList={setWishList}
      />
    </div>
  );
}

export default ProductsPage;
