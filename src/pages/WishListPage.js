import React from "react";

import WishList from "../components/whishlist/WishList";

export default function WishListPage(prop) {
  const { wishList, setWishList } = prop;
  return (
    <div>
      <WishList wishList={wishList} setWishList={setWishList}/>
    </div>
  );
}
