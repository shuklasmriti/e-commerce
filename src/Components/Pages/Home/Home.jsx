import React, { useState,useEffect } from 'react'
import SimpleSlider from '../../Slider/Slider';
import Loader from '../Loader/Loader';
import { CardContainer } from '../../Card-Container/CardContainer';
<link rel="stylesheet" href="./Components/Pages/Home/Home.css" />
export const Home = () => {
const categories =["groceries" ,"fragrances","womens-dresses",  "womens-watches","smartphones","mens-shirts"]


const [loading,setLoading]=useState(true);


useEffect(() => {
    // Simulate data fetching with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  }, []);
//   const filterData =searchResults.filter(item=>item.title.toLowerCase().includes(searchInput.toLowerCase()))
//   console.log(filterData);
return (
    <>   {
        loading ?(<Loader/>):
     <div className='home'>
        
     <SimpleSlider/>
 
    
  <div className="category-container">    {
        categories?.map((cat)=>(
            <CardContainer category={cat} />
           

        ))
    }
    </div>
</div>
}
    </>
    )

};