import React from 'react'
import SimpleSlider from '../../Slider/Slider'
import  { useState, useEffect } from 'react';
// import { Products } from '../../Api/Products';
import { Fashion } from '../Fashion/Fashion';
import { Slider2 } from '../../Slider2/Slider2';
import { CardContainer } from '../../Card-Container/CardContainer';
import { Cards } from '../../Cards/Cards';
import { SinglePage } from '../../SinglePage/SinglePage';
import { Grocery } from '../Grocery/Grocery';
import { Cart } from '../../Cart/Cart';




<link rel="stylesheet" href="./Components/Pages/Home/Home.css" />
export const Home = () => {
const categories =["smartphones","fragrances","groceries","womens-dresses",  "womens-watches","mens-shirts"]
return (
    <>   
     <div className='home'>
        
     <SimpleSlider/>
 
    </div>
  
    {
        categories?.map((cat)=>(
            <CardContainer category={cat} />

        ))
    }

{/* <SinglePage/> */}

    </>
    )

};