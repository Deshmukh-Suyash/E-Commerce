import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
//https://dummyjson.com/products/search?q=phone
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  let timerRef = useRef(null);
  useEffect(() => {
    async function getData() {
      if (query.trim().length == 0) return;
      // console.log("search Api called for query   ", query);
      let data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      let jsonData = await data.json();
      setSearchSuggestion(jsonData.products);
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      getData();
    }, 400);
  }, [query]);
  return (
    <div className="w-2/8 h-3/4 z-20" >
      <input className="pl-2 pb-1 outline-none border-none bg-white rounded-xl " value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        placeholder="Search products..."
      />

      <div className="z-20 bg-white">
        {query.trim().length !== 0 &&
          searchSuggestion.map((pObj) => {
            return (
              <Link to={`/products/${pObj.id}`} >
                <p >{pObj.title}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default SearchBar;