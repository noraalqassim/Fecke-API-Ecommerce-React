import React from "react";

import "../whishlist/WishListItem.css";
import { MdDeleteOutline } from "react-icons/md";
export default function WishListItem(prop) {
  const { item } = prop;
  return (
    <div className=".shopping-cart">
    <div className="item">
      <div className="buttons">
        <span className="delete-btn">
          <MdDeleteOutline />
        </span>
      </div>
      <div className="image">
        <img src={item.image} style={{ width: 60 }} alr={item.title} />
      </div>
      <div className="description">{item.title}</div>
      <div className="total-price">${item.price}</div>
    </div>
    </div>
  );
}
