import React from "react";

import "../Products/Products.css";
import Product from "./Product";

export default function Products(prop) {
  return (
    <div className="product">
      <div class="product-heading">
        <h2>Gemstone</h2>
        <p>All Gemstones Suit you</p>
      </div>
      <div className="productList">
        {prop.productList.map((product) => {
          return <Product key={product.id} propName={product} />;
        })}
      </div>
    </div>
  );
}
