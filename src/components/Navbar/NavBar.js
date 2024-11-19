import React from "react";

import "../navbar/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.png";
import { FaBars } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";

export default function NavBar(prop) {
  const { wishList } = prop;

  const arrayLength = wishList.length;
  console.log(arrayLength, "length");

  return (
    <header className="p-2">
      <input type="checkbox" name="#" id="toggler" />
      <label for="toggler">
        <FaBars />
      </label>
      <a class="logo">
        <img src={logo} alt="Logo" />
      </a>
      <nav class="navbar">
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/products">Products</Link>
        </a>
      </nav>
      <div class="icons">
        <a>
          <Link to="/wishList">
            <FaHeart />
          </Link>
          <span>{arrayLength}</span>
        </a>
        <a href="#">
          <FaRegUser />
        </a>
        <a href="#">
          <Link to="/cart">
            <HiShoppingCart />
          </Link>
          <span>0</span>
        </a>
      </div>
    </header>
  );
}
