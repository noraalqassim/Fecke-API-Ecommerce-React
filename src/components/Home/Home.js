import React from "react";

import "../home/Home.css";
import HomeProduct from "./HomeProduct";

export default function Home(prop) {
  const { productList  } = prop;


  return (
    <div className="home">
      <h2>Explore our exclusive collection of top-rated products!</h2>
      <div className="home-product-list">
        {productList.map((product) => (
          <div key={product.id} >
            <HomeProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}