import React from "react";
import items from "../../api/items.json";
import "./ProductList.css";

import CartButtons from "./CartButtons";
function ProductList() {
  return (

    <section className="container">
    {Object.keys(items).map((category) => (
      <div key={category}>
        {items[category].map((product, key) => (
          <div className="product-container" key={key}>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <CartButtons product={product} />
          </div>
        ))}
      </div>
    ))}
  </section>
  );
}

export default ProductList;
