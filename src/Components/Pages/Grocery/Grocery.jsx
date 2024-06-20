import React from 'react'
import SingleCategory from '../SingleCategory/SingleCategory'
<link rel="stylesheet" href= './Components/Pages/Grocery/Grocery.css'/> 


export const Grocery = () => {
  return (
    <>
    <div className='groc'>
    <SingleCategory cat={"groceries"}/>
    
  </div>
  </>
  )
}
