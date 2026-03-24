import React from "react";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addDataByCategory } from "../app/ProductSlice";
const UseProductCategory=(category)=>{
  const productData=useSelector((state)=>state.product.addDataByCategory)
  console.log("Data",productData);
  const dispatch=useDispatch();
  const [productCategoryData, setProductCategoryData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  async function getData() {
      try {
        let categoryData = await fetch(
          `https://dummyjson.com/products/category/${category}`,
        );
        console.log("Api Called");
        let jsonData = await categoryData.json();
        setProductCategoryData(jsonData);
        dispatch(addDataByCategory({Category:category,ProductArray:jsonData.products}))
      } catch (err) {
        setError(true);
      }
    }
    useEffect(() => {
      const cachedData=productData[category];
      if(!cachedData){
      getData();
    }
      else{
       setProductCategoryData(cachedData)
       setLoading(false);
      }
    }, []);
 return {productCategoryData,error,loading}
}
export default UseProductCategory;