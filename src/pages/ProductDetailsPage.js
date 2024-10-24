import React from 'react'

import ProductDetail from "../components/productDetail/productDetail";
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
export default function ProductDetailsPage(prop) {
  const { wishList } = prop;

  return (
    <div>
      <ProductDetail />
      </div>
  )
}

