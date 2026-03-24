import React from "react";
import { useSelector } from "react-redux";
const UseproductInWishlist=(id)=>{
   const wishlistData = useSelector((state) => state.product.wishlistData);
  return wishlistData[id] ? true : false;
}
export default UseproductInWishlist