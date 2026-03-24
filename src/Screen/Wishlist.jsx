import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import ProductCard from "../Components/ProductCard";
import WishlistIcon from "../Icons/Wishlist";
const Wishlist=()=>{
  const wishlistData=useSelector((state)=>state.product.wishlistData);
  const data=Object.values(wishlistData)
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar/>
        <div className="relative flex-grow w-full flex justify-center mt-20">
          {data.length>0?(
        <div className="grid grid-cols-4 gap-4 pt-2 pl-2 pr-5 pb-5  rounded-lg w-full max-w-7xl">
          {data.map((pObj) => (
            <ProductCard key={pObj.id} data={pObj} />
          ))}
        </div>):(
          <div className="absolute top-1.5/4 left-2/4 ">
            <WishlistIcon fill="red" height="50" width="50"/>
            <button className=" text-white font-medium rounded-lg ">Find items to save</button>
          </div>
        )
}</div>
    </div>
  )
}
export default Wishlist;