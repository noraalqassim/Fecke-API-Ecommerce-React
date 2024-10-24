import React from 'react'

import Cart from "../components/cart/Cart";

export default function CartPage(prop) {
    const { cartItem } = prop;
  return (
    <div><Cart cartItem={cartItem}/></div>
  )
}
