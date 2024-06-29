import React, {  useState,useEffect } from 'react';
import Loader from '../Loader/Loader';
// import { Cards } from '../../Cards/Cards';
import { CardContainer } from '../../Card-Container/CardContainer';
<link rel="stylesheet" href="./Components/Pages/SingleCategory/SinleCategory.css" />

const  SingleCategory = ({cat}) => {
// console.log(cat,"cat")

const[loading ,setLoading]=useState(true);

useEffect(() => {
  // Simulate a fetch request
  const fetchData = async () => {
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setLoading(false);
    },2000); // Adjust this delay as needed
  };

  fetchData();
}, [cat]);

  return (
    <>    
<div className="singleCategory">

{loading ?(<Loader/>):

(<>
  <h1>{cat}</h1>
<CardContainer category={cat}/>
</>

)}
</div>
</>
);
};
export default SingleCategory;