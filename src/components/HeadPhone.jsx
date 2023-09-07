import React from "react";

import items from "../api/items.json";

import CartButtons from "./productList/CartButtons";
import "./productList/ProductList";

function HeadPhone() {
  const cameraItems = items["HeadPhone"];
  return (
    <section className="container">
      <div>
        {cameraItems.map((product, key) => (
          <div className="product-container" key={key}>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <CartButtons product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeadPhone;
