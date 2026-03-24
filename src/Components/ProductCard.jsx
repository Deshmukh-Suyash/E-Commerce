import React from 'react';
import Wishlist from '../Icons/Wishlist';
import { Link } from 'react-router-dom';
import Rating from '../Icons/Rating';
import UseproductInWishlist from '../Hooks/UseproductInWishlist';
import UseWishListProduct from '../Hooks/UseWishListProduct';
import { useDispatch } from 'react-redux';
import { addCart } from '../app/ProductSlice';

const ProductCard = ({ data }) => {
  // console.log(data);
  const { title, category, price, rating, brand, thumbnail, id,discountPercentage } = data;
  const dispatch = useDispatch();
  const {productInWishlist,handleWishlist}=UseWishListProduct(data);
  const discountprice=price-((price*discountPercentage)/100);
  const discountedprice=discountprice.toFixed(2);
  // const ProductInWishlist = UseproductInWishlist(id);
  return (
    <Link to={`/products/${id}`} className=" relative border-2 border-solid border-gray-300 rounded-lg p-3 bg-white ">
     <div onClick={(e)=>{
      e.preventDefault()
      handleWishlist();
     }
     }
     className="absolute top-2 right-2 h-6 w-6">
      <Wishlist  fill={productInWishlist?"red":"#E5E4E2"} />
     </div>
      <img className="h-60 w-full " src={thumbnail} alt={title} />
      <p className="text-sm text-grey-300 font-semibold">{title}</p>
      <p className="text-sm text-grey-300 font-semibold">{brand}</p>
      <p className="text-gray-300 text-m text-grey-700 font-semibold">{category}</p> 
      <div className='flex gap-1'>
        <p className='mt-1'><Rating fill="yellow" height="15px"/></p>
        <p className="text-sm text-grey-300 font-semibold"> {rating}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm  font-bold text-green-500">${discountedprice}</p>
        <button 
          type="button" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(addCart(data));
          }}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500  dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-base"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  )
}

export default ProductCard;