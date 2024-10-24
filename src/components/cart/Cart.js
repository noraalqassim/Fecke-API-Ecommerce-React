import React from "react";

export default function Cart(prop) {
  const { cartItem } = prop;

  if (cartItem.length === 0) {
    return <p> The Cart is empty.</p>;
  }

  return (
    <div>
      <h1> Cart</h1>
      {cartItem.map((item) => {
        return (
          <div>
            <p> {item.title}</p>
            <p> {item.price}</p>
          </div>
        );
      })}
    </div>
  );
}
