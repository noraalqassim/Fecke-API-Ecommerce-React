import React from "react";

import Home from "../components/home/Home";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
function HomePage(prop) {
  const { productList, homeProduct, setHomeProduct } = prop;
  return (
    <div>
      <Home
        productList={productList}
        homeProduct={homeProduct}
        setHomeProduct={setHomeProduct}
      />
    </div>
  );
}

export default HomePage;
