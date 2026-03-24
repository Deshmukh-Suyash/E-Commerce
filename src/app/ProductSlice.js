import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productDataMap: {},
  addDataByPage: {},
  addDataByCategory: {},
  wishlistData: {},
  addCartProduct: {},
};
export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductDataById: (state, action) => {
      const ProductDataArray = action.payload;
      for (let i = 0; i < ProductDataArray.length; i++) {
        const ProductData = ProductDataArray[i];
        state.productDataMap[ProductData.id] = ProductData;
      }
    },
    addDataByPage: (state, action) => {
      const Page = action.payload.page;
      const ProductArray = action.payload.ProductArray;
      state.addDataByPage[Page] = ProductArray;
    },
    addDataByCategory: (state, action) => {
      const Category = action.payload.Category;
      const ProductArray = action.payload.ProductArray;
      state.addDataByCategory[Category] = ProductArray;
    },
    addWishlistData: (state, action) => {
      const productData = action.payload;
      state.wishlistData[productData.id] = productData;
    },
    removefromWishlist: (state, action) => {
      const id = action.payload;
      delete state.wishlistData[id];
    },
    addCart: (state, action) => {
      const data = action.payload;
      const id = data.id;
      const isproductInCart = state.addCartProduct[id];
      if (isproductInCart) {
        state.addCartProduct[id].quantity += 1;
      } else {
        state.addCartProduct[id] = { productData: data, quantity: 1 };
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const isproductInCart = state.addCartProduct[id];
      if (isproductInCart) {
        if (state.addCartProduct[id].quantity === 1) {
          delete state.addCartProduct[id];
        } else {
          state.addCartProduct[id].quantity -= 1;
        }
      }
    },
    removeCart: (state, action) => {
      const id = action.payload;
      const isproductInCart = state.addCartProduct[id];
      if (isproductInCart) {
        delete state.addCartProduct[id];
      }
    },
  },
});
export const {
  addProductDataById,
  addDataByPage,
  addDataByCategory,
  addWishlistData,
  removefromWishlist,
  addCart,
  decreaseQuantity,
  removeCart,
} = ProductSlice.actions;
export default ProductSlice.reducer;
