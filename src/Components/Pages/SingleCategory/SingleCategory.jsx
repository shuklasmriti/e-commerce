// import React, { useEffect, useState } from 'react';
// import { Cards } from '../../Cards/Cards';
import { CardContainer } from '../../Card-Container/CardContainer';
<link rel="stylesheet" href="./Components/Pages/SingleCategory/SinleCategory.css" />

const  SingleCategory = ({cat}) => {
// console.log(cat,"cat")

  return (
    <>    
<div className="singleCategory">
<CardContainer category={cat}/>
</div>

</>

);
};
export default SingleCategory;