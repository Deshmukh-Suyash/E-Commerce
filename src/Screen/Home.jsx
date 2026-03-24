import React from 'react'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Crausal from '../Components/Crausal'
const Home=()=>{
    return (
        <div className="bg-blue-200 text-black">
             <Navbar/>
             <Crausal/>
             <Products/>
        </div>
    )
};
export default Home;