import React from "react";

import Home from "../components/home/Home";
import Hero from "../components/hero/Hero";
function HomePage(prop) {
  const { productList } = prop;

  const filteredProducts = productList.filter(
    (product) => product.rating.rate >= 4.5
  );

  return (
    <div>
      <Hero />
      <Home productList={filteredProducts} />
    </div>
  );
}

export default HomePage;
