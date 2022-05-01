import React, { useState } from "react";



function Item({ name, category }) {
  const [inCart, addItem] = useState(false)

  function addToCart() {
    addItem((inCart) => !inCart)

  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
