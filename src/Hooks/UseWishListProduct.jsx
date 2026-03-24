import React from "react";
import {useDispatch} from 'react-redux'
import { addWishlistData,removefromWishlist } from "../app/ProductSlice";
import  UseproductInWishlist from "../Hooks/UseproductInWishlist"
const UseWishListProduct=(data)=>{
 const id = data?.id;
  const dispatch = useDispatch();
  const productInWishlist = UseproductInWishlist(id);
  function handleWishlist(){
    if(productInWishlist){
        dispatch(removefromWishlist(id))
    }
    else{
        dispatch(addWishlistData(data))
    }
  }
    return {productInWishlist,handleWishlist};
}
export default UseWishListProduct;