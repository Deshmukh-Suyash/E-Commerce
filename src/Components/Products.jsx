import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductSkeletonUI from './ProductSkeletonUI';
import { useParams } from 'react-router-dom';
import UseProductsData from '../Hooks/UseProductsData';
const Products = () => {
  // console.log("Cached Pages from Redux:", cachedPages);
  
  
  const [CurrentPage, setCurrentPage] = useState(1);
  const {productdata,loading,error}=UseProductsData(CurrentPage);
  if (error) {
    return <p>....API failed</p>
  }
  if (loading) {
    return <ProductSkeletonUI />
  }
  return (
    <div className="flex flex-col items-center w-full gap-10 mt-7 mb-10">
      <div className="grid grid-cols-4 gap-4 pt-8 pl-8 pr-5 pb-5 border-2 border-solid border-red-300 rounded-lg w-full max-w-7xl">
        {productdata.map((pObj) => (
          <ProductCard key={pObj.id} data={pObj} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <div className="join">
          <input onChange={() => setCurrentPage(1)}
            checked={CurrentPage === 1}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
          />
          <input onChange={() => setCurrentPage(2)}
            checked={CurrentPage === 2}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input onChange={() => setCurrentPage(3)}
            checked={CurrentPage === 3}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input onChange={() => setCurrentPage(4)}
            checked={CurrentPage === 4}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
