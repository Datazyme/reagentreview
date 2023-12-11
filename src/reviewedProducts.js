import React from "react";
import products from "./data/productData.js";

function ReviewedProducts() {
  return (
    <div className="page">
      <header className="header">HEADER Review Scientific Products</header>
      <div className="body">
        <div className="containerA">
          {products[0].name} {products[0].description}
        </div>
        <div className="containerB">containerB</div>
        <div className="containerC">containerC</div>
      </div>
    </div>
  );
}

export default ReviewedProducts;
