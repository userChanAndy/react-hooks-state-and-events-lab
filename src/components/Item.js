import React, { useState } from "react";

function Item({ name, category }) {
  const [cartFull, setCart] = useState(true)

  function cart () {
    return setCart(cartFull => !cartFull)
  }

  const cartStatus = cartFull ? "" : "in-cart"
  const cartButton = cartFull ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cart} className="add">{cartButton}</button>
    </li>
  );
}

export default Item;
