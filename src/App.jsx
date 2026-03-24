import React from 'react'
import Home from './Screen/Home'
import Pdp from './Screen/Pdp'
import{Routes,Route} from 'react-router-dom'
import ThemeProvider from "./Store/ThemeProvider";
import ProductCategory from './Screen/ProductCategory';
import Wishlist from './Screen/Wishlist';
import Cart from './Screen/Cart';
const App=()=>{
  return (
    <ThemeProvider>
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/products/:id" element={<Pdp/>}></Route>
     <Route path="category/:url" element={<ProductCategory/>}></Route>
     <Route path="/products/:title" element={<Pdp/>}></Route>
     <Route path="/wishlist" element={<Wishlist/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
   </ThemeProvider>
  )
}
export default App
