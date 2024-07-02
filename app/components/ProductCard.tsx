import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="p-4 my-5 bg-sky-500 text-white text-2xl hover:bg-sky-700">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
