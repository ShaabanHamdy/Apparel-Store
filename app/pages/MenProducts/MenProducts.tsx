"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
// import img from "../../images/slider/9707789.jpg";
import img from "../../../public/images/slider/9707789.jpg";
import { useAppContext } from "../context/Context";

const products = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  image: img.src, // Use your own images
  //   image: `/products/men${(i % 4) + 1}.jpg`, // Use your own images
  price: 10,
}));

const MenProducts = () => {
  const { state } = useAppContext();
  return (
    <div className="container mx-auto py-8">
      <h2
        className={`text-2xl font-bold mb-6 ${
          state.theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Men&#39;s Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MenProducts;
