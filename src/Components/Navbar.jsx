import React from "react";
import CartIcon from "../Icons/CartIcon";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Store/ThemeProvider";
import { useContext } from "react";
import Lighttheme from "../Icons/Lighttheme";
import Darktheme from "../Icons/Darktheme";

const Navbar = ({ hidenavbar = false }) => {
  const {theme,setTheme} = useContext(ThemeContext);
  // console.log(theme);
  const light="h-10 w-screen border-none border-emerald-700 bg-blue-400 flex justify-around items-center justify-items-center-safe";
  const dark="h-10 w-screen border-none border-emerald-700 bg-black-800 flex justify-around items-center justify-items-center-safe"
  return (
    <div className={theme=="light"? light: dark}>
      <Link to="/" className=" flex justify-center text-white  font-medium">
        Shopsy
      </Link>
      <div className=" pl-4 outline-none border-none bg-white rounded-2xl h-3/4 w-4/8 z-20">
        {" "}
        {!hidenavbar && <SearchBar />}
      </div>
      <div className="flex gap-6 justify-between">
        <div className="flex  text-white  font-medium">Login</div>
        <Link to={`/wishlist`} className="flex justify-center text-white  font-medium">Wishlist</Link>
        <div onClick={()=>{theme=="light" ? setTheme("dark"):setTheme("light") }}>
        <label className="flex cursor-pointer gap-2">
          <Lighttheme />
          <input
            type="checkbox"
            value="synthwave"
            // checked={theme == "light" ? "checked" : ""}
            className="toggle theme-controller"
          />
          <Darktheme/>
        </label>
        </div>
        <Link to={"/cart"}><CartIcon /></Link>
      </div>
    </div>
  );
};

export default Navbar;
