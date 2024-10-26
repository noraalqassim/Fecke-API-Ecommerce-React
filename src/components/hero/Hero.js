import React from "react";

import "../hero/Hero.css";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="hero">
      <h1>
        Discover a world of style and convenience at your fingertips with our
        curated selection of products on our website.
      </h1>
      <br />
      <Link to="/products">
        <a class="btn" style={{ background: "none" }} href="#link">
          <i>S</i>
          <i>h</i>
          <i>o</i>
          <i>p</i>
          <i>.</i>
          <i>N</i>
          <i>o</i>
          <i>w</i>
          <i>!</i>
        </a>
      </Link>
    </div>
  );
}
