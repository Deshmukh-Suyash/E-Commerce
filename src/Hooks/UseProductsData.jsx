import React from "react";
import { useState,useEffect } from "react";
import { addProductDataById } from '../app/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addDataByPage } from '../app/ProductSlice';

const UseProductsData=(CurrentPage=1)=>{
const cachedPages = useSelector((state) => state.product.addDataByPage);
// console.log(cachedPages)
const [error, setError] = useState(false);
const [loading, setloading] = useState(true);
const dispatch = useDispatch();
const [productdata, setProductData] = useState([]);
async function getData() {
    setloading(true);
    let limit = 15;
    let skip = (CurrentPage - 1) * limit;
    try {
      let data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      // console.log("Api Called")
      let jsonData = await data.json();
      setProductData(jsonData.products);
      dispatch(addProductDataById(jsonData.products));
      dispatch(addDataByPage({ page: CurrentPage, ProductArray: jsonData.products }))
    }
    catch (err) {
      setError(true);
    }
    finally {
      setloading(false);
    }
  }
  useEffect(() => {
    const cachedData = cachedPages[CurrentPage];
    if (!cachedData) {
      getData();
    } else {
      setProductData(cachedData);
      setloading(false);
    }
  }, [CurrentPage]);
  return  {productdata,loading,error}
  }
export default UseProductsData;