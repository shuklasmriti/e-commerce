import React from 'react'
import {useNavigate} from 'react-router-dom'

<link rel="stylesheet" href="./Components/Cards/Cards.css" />
  export const Cards = ({item}) => {
  const navigate=useNavigate()
  return (
<>
<div className="cards" key={item?.id} onClick={()=>
  navigate(`/singlepage/${item?.id}`)
} >
  <img className='image' src={item?.thumbnail} alt="nothing" />
  
  <h4 className='Card-title-name' >{item?.title} </h4>
  <h4 className='Card-price'>Price:$ {(item?.price)}</h4>
  {/* <h4 className='discount'>Discount:{item?.discountPercentage}%</h4> */}
</div>




</>



    )
}
export default Cards;