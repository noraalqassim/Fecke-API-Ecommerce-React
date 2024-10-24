import React from "react";

import "../home/Home.css";
import { Link } from "react-router-dom";
import HomeProduct from "./HomeProduct";

export default function Home(prop) {
  const { productList, homeProduct, setHomeProduct } = prop;

  const filteredProducts = productList.filter(
    (product) => product.rating === 4
  );

  let products = productList;
  if (homeProduct) {
    products = filteredProducts;
  }

  return (
    <div className="home">
      <h1>
        Discover a world of style and convenience at your fingertips with our
        curated selection of products on our website.
      </h1>
      <br />
      {/* <a>
        {" "}
        <Link to="/products">Show Now</Link>{" "}
      </a>
      <HomeProduct setHomeProduct={setHomeProduct} /> */}
      <button class="button-50" role="button"><HomeProduct setHomeProduct={setHomeProduct} /> Show Now</button>
    </div>
  );
}
