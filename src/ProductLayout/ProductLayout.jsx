import React from "react";
import Card from "../Components/Card/Card";
import "../ProductLayout/ProductLayout.css"

function ProductLayout() {
  return (
    <div>
      <div class="container product-layout p-3 text-center">
        <div class="row w-100">
          <div class="col-3">
            <Card />
          </div>
          <div class="col-3">
            <Card />
          </div>
          <div class="col-3">
            <Card />
          </div>
          <div class="col-3">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLayout;
