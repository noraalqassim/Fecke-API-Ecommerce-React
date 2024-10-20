import React from "react";

import "../Navbar/NavBar.css";
import logo from '../../Images/Logo.png';
import { FaBars } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";

export default function NavBar() {
  return (
    <header>
      <input type="checkbox" name="#" id="toggler" />
      <label for="toggler"><FaBars /></label>
      <a href="#" class="logo">
        <img src={logo} alt="Logo" />
      </a>
      <nav class="navbar">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Contact Us</a>
      </nav>
      <div class="icons">
        <a href="#" ><FaHeart /></a>
        <a href="#"><FaRegUser /></a>
        <a href="#"><HiShoppingCart /><span>0</span></a>
      </div>
      </header>
  );
}
