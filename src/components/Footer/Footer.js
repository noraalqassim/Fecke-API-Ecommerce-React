import React from 'react'

import "../footer/Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="footer">
    <div class="footer-social">
      <a href="#"><FaInstagram /></a>
      <a href="#"><SlSocialYoutube /></a>
      <a href="#"><FaFacebookF /></a>
      <a href="#"><BsTwitterX /></a>
      <a href="mailto:Noraalqassim12@gmail.com"><FaEnvelope /></a>
    </div>

    <ul class="footer-list">
      <li><Link to="/">Home</Link> </li>
      <li><Link to="/products">Products</Link> </li>
    </ul>
    <p class="footer-copyight">
      Nora React Store @2024
    </p>
  </footer>
  )
}
