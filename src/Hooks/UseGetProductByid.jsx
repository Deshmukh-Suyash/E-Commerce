import React from "react";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addProductDataById } from "../app/ProductSlice";
import {addDataByPage} from "../app/ProductSlice";
const useGetProductByid=(id)=>{
    const productdata=useSelector((state)=>state.product.productDataMap);
    const dispatch=useDispatch();
    const [productData, setProductData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      async function getData() {
            try {
              let apiData = await fetch(`https://dummyjson.com/products/${id}`);
              let jsonData = await apiData.json();
              setProductData(jsonData);
              // console.log("Api called");
              dispatch(addProductDataById([jsonData]));
            } catch (err) {
              setError("Something went wrong!");
              console.error(err);
            } finally {
              setLoading(false);
            }
          }
      useEffect(() => {
          if (id) {
            const storeddata=productdata[id];
            if(storeddata){
              setLoading(false)
              setProductData(storeddata);
            }
            else{
            getData();
            }
          } else {
            setError("Product Id not found");
            setLoading(false);
          }
        }, [id]);
 return {loading,productData,error};
}
export default useGetProductByid;