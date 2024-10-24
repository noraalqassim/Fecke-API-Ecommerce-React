import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import "../cart/Cart.css";
export default function Cart(prop) {
  const { cartItem } = prop;

  // if (cartItem.length === 0) {
  //   return <p> The Cart is empty.</p>;
  // }


  return (
    // <div>
    //   <h1> Cart</h1>
    //   {cartItem.map((item) => {
    //     return (
    //       <div>
    //         <p> {item.title}</p>
    //         <p> {item.price}</p>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="shopping-cart">
    <div className="title">Shopping Bag</div>
    {cartItem.map((item) => {
      return (
        <div className="item">
          <div className="buttons">
            <span className="delete-btn">
              <MdDeleteOutline />
            </span>
          </div>

          <div className="image">
            <img
              src={item.image}
              style={{ width: 60 }}
              alr={item.title}
            />
          </div>

          <div className="description">
            <p>{item.title}</p>
          </div>

          <div className="quantity">
            <button class="plus-btn" type="button" name="button">
            <FaArrowUp />
            </button>
            <input type="text" name="name" value="1" />
            <button className="minus-btn" type="button" name="button">
            <FaArrowDown />
            </button>
          </div>

          <div className="total-price">${item.price}</div>
        </div>
      );
    })}
  </div>
);
}
