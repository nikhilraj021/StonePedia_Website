import React from "react";
import EachDetail from "./EachDetail";

const ProductDetails = () => {
  return (
    <div className="py-20">
      <div className="flex w-full gap-10 p-10">
        <div className="w-[50%]">
          <img
            src="src/assets/Apple-Green-01-.png"
            alt=""
            className="h-96 w-full"
          />
        </div>
        <EachDetail />
      </div>
    </div>
  );
};

export default ProductDetails;
