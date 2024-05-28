import React, { useEffect, useState } from "react";
import  Cards  from "../Cards/Cards";
<link rel="stylesheet" href="./Components/Card-Container/CardContainer.css" />;
export const CardContainer = ({ category }) => {

  const [categoryData,setCategoryData]= useState([])
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

  useEffect(()=>{
    fetchCategoryData();
  },[fetchCategoryData])
  return <div className="CardContainer">
   
    {categoryData?.map((obj)=>(
      
   <>
      <Cards item={obj} />
    

   </>
    
    ))}
  </div>;
};
