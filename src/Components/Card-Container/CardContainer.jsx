import React, { useEffect, useState } from "react";
import  Cards  from "../Cards/Cards";
import useSearch from "../../Hook/useSearch";
<link rel="stylesheet" href="./Components/Card-Container/CardContainer.css" />;
export const CardContainer = ({ category }) => {

  const [categoryData,setCategoryData]= useState([])
const {searchInput }=useSearch();
  

  useEffect(()=>{
    const fetchCategoryData = async () => {
      try {
        const res = await fetch(
         ` https://dummyjson.com/products/category/${category}`
        );
        const jsonn = await res.json();
        setCategoryData(jsonn.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    
    fetchCategoryData();

    
  },[category])

  const filterData =categoryData.filter(item=>item.title.toLowerCase().includes(searchInput.toLowerCase()))
  //   console.log(filterData);
  return <div className="CardContainer">
   
    {filterData?.map((obj)=>(
      
   
      <Cards item={obj} />
    

   
    
    ))}
  </div>;
};
