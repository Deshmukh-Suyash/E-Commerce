import React from "react";
import { useState,useEffect,useRef } from "react";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import ChevronLeft from "../Icons/ChevronLeft";
import ChevronRight from "../Icons/ChevronRight";
import { useNavigate } from "react-router-dom";
let images = [
  { image: image1, url: "beauty" },
  { image: image2, url: "fragrances" },
  { image: image3, url: "furniture" },
  { image: image4, url: "groceries" },
];
const Crausal=()=>{
  const navigate=useNavigate();
   const [activeIndex, setActiveIndex] = useState(1);
   const timeRef=useRef(null);
   function clearTimer(){
    if(timeRef.current){
      clearInterval(timeRef.current)
    }
   }
   function addTimer(){
    timeRef.current =setInterval(()=>{
      setActiveIndex((previousIndex)=>{
        return ((previousIndex + 1) % images.length)
      })
  },4000)
   }
    
   useEffect(()=>{
   clearTimer();
   addTimer();
  return clearTimer;
   },[]);
  function handleLeft(e) {
    e.stopPropagation();
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }

  function handleRight(e) {
    e.stopPropagation();
    setActiveIndex((activeIndex + 1) % images.length);
  }
  function mouseEnter(){
     clearTimer();
    }
    function mouseLeave(){
     addTimer();
    }
    function handleClick(){
      navigate(`/category/${images[activeIndex].url}`)
    }
  
  return (
    <div  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={handleClick}className="h-[45vh] w-screen relative mt-1.5 ">
      <div
        onClick={(e)=>{
          handleLeft(e);
        }}
        className="bg-white h-10 w-8 absolute left-0 flex justify-center items-center  top-[20vh]  "
      >
        <ChevronLeft />
      </div>
      <div
        onClick={(e)=>{
          handleRight(e);
        }}
        className="bg-white h-10 w-8 absolute right-0 flex justify-center items-center  top-[20vh] "
      >
        <ChevronRight />
      </div>
      <div className="h-full w-full">
        <img className="h-full w-full" src={images[activeIndex].image} alt="" />
      </div>
    </div>
  );
}
export default Crausal;