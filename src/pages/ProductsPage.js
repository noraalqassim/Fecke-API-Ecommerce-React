import React from "react";

import Products from "../components/Products/Products";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
function ProductsPage(prop) {
  const { productList, setUserInput, userInput, wishList, setWishList,cartItem, setCartItem } = prop;
  return (
    <div>
      <Products
        productList={productList}
        userInput={userInput}
        setUserInput={setUserInput}
        wishList={wishList}
        setWishList={setWishList}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
    </div>
  );
}

export default ProductsPage;
