import React from 'react'

import "../Home/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='home'>
        <h1>Discover a world of style and convenience at your fingertips with our curated selection of products on our website.</h1>
        <br/>
        <a > <Link to="/products">Show Now</Link> </a>
    </div>
  )
}
