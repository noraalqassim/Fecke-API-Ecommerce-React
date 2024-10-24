import React from 'react'

import Cart from "../components/cart/Cart";
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

export default function CartPage(prop) {
    const { cartItem } = prop;
  return (
    <div>
      <Cart cartItem={cartItem}/>
      </div>
  )
}
