import React from "react";

import WishList from "../components/whishlist/WishList";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

export default function WishListPage(prop) {
  const { wishList } = prop;
  return (
    <div>
      <WishList wishList={wishList}/>
    </div>
  );
}
