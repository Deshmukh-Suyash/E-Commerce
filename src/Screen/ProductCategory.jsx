import React from "react";
import Products from "../Components/Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import ProductSkeletonUI from "../Components/ProductSkeletonUI";
import UseProductCategory from "../Hooks/UseProductCategory";
const ProductCategory = () => {
  const { url: category } = useParams();
  const {productCategoryData,error,loading}=UseProductCategory(category)

  if (!productCategoryData) return <div>Api not working</div>;
  if (loading) {
    <ProductSkeletonUI />;
  }
  return (
    <div className="bg-blue-300">
      <Navbar />
      <div className="grid grid-cols-4 gap-4 p-4  bg-gray-100">
        {productCategoryData.products.map((pObj) => (
          <ProductCard key={pObj.id} data={pObj} />
        ))}
      </div>
    </div>
  );
};
export default ProductCategory;
