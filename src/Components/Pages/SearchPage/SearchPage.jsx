import React from 'react';
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import './SearchPage.css'
import Cards from '../../Cards/Cards';

const SearchPage = () => {
  
    const [queryParameters] = useSearchParams()
    const search =queryParameters.get('search');
  
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log(search);

    
    

console.log(searchResults);
      
 useEffect(()=>{
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
        });
  };



    handleKeyPress();
 },[search])
  
   
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