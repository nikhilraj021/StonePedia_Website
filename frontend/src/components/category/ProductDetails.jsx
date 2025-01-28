import React from "react";
import EachDetail from "./EachDetail";
import ExtraDetails from "./ExtraDetails";

const ProductDetails = () => {
  return (
    <div className="pt-20 xl:px-20 2xl:px-40">
      <div className="flex w-full gap-5 xl:gap-8 p-5 xl:pt-10  ">
        <div className="w-[50%]">
          <img
            src="src/assets/Apple-Green-01-.png"
            alt=""
            className="h-[500px] w-full"
          />
        </div>
        <EachDetail />
      </div>
      <ExtraDetails />
    </div>
  );
};

export default ProductDetails;
