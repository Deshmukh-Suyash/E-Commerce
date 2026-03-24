import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart } from "../app/ProductSlice";

const UseCartProduct = (data) => {
  const addCartProduct = useSelector((state) => state.product.addCartProduct);
  const dispatch = useDispatch();
  const id = data?.id;
  const isproductInCart = id ? addCartProduct[id] : false;

  function handlecart() {
    if (!data) return;
    if (isproductInCart) {
      dispatch(removeCart(id));
    } else {
      dispatch(addCart(data));
    }
  }
  return { handlecart, isproductInCart };
};
export default UseCartProduct;