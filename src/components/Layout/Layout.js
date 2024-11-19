import React from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
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