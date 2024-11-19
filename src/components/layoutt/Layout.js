import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../foolder/Footer";
import { Outlet } from "react-router-dom";

function Layout(prop) {
  const { wishList } = prop;
  return (
    <div>
      <NavBar wishList={wishList} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
