import React from "react";
import "../whishlist/WishList.css";
import WishListItem from "./WishListItem";

export default function WishList(prop) {
  const { wishList } = prop;

  if (wishList.length === 0) {
    return <p> The wish list is empty.</p>;
  }
  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
      {wishList.map((item) => {
        return <WishListItem key={item.id} item={item} />;
      })}
    </div>
  );
}
