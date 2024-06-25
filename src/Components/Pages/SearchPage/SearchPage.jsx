import React from 'react';
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

import Cards from '../../Cards/Cards';
<link rel="stylesheet" href="./Components/Pages/SearchPage/SearchPage.css" />

const SearchPage = () => {
  
    const [queryParameters] = useSearchParams()
    const [search, setSearch] = useState(queryParameters.get('search'));
  
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [inputValue, setInputValue] = useState("");
    console.log(search);

    
      const handleKeyPress = (event) => {
        setIsLoading(true);
          fetch(`https://dummyjson.com/products/search?q=${search}`)
            .then((res) => res.json())
            .then((data) => {
              setSearchResults(data?.products);
              setIsLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching search results:", error);
            })
            .finally(()=>{
                setIsLoading(false);
            })
            ;
            
        
      };

console.log(searchResults);
      
 useEffect(()=>{
    handleKeyPress();
 },[])
  
   
 return( 
    <>
{isLoading ? <h1>loading</h1>: 
     <div className="CardContainer">
   
 {searchResults?.map((obj)=>(
   

   <Cards item={obj} />
 
 ))}
 
 </div>}
 </>
 )






}

export default SearchPage