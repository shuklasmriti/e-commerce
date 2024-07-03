import React from 'react';
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import './SearchPage.css'
import Cards from '../../Cards/Cards';
import Loader from '../Loader/Loader';
// import useSearch from '../../../Hook/useSearch';
const SearchPage = () => {
  
    const [queryParameters] = useSearchParams()
    const search =queryParameters.get('search');
  
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [searchInput,setSearchInput]= useState('');
    // const {searchInput }=useSearch();
// const [loading,setLoading]=useState(true);
    
    

      
 useEffect(()=>{
  setIsLoading(true);
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
  
//    const filterData =searchResults.filter(item=>item.title.toLowerCase().includes(searchInput.toLowerCase()))
//  console.log(filterData);
 
   return( 
    <>
{isLoading ? (<Loader/>): 
searchResults.length >0 ? (
     <div className="CardContainers">
   
 {searchResults?.map((obj)=>(
   

   <Cards item={obj} />
 
 ))}
 
 </div>):(
<div className='not-found'><h1>No Product found!!</h1></div>  
  
 )}
 </>
 );
};
export default SearchPage