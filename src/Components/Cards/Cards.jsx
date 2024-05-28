import React from 'react'
import {useNavigate} from 'react-router-dom'

<link rel="stylesheet" href="./Components/Cards/Cards.css" />
  export const Cards = ({item}) => {
  // console.log(item)
  const navigate=useNavigate()
  return (
<>
<div className="cards" key={item?.id} onClick={()=>
  navigate(`/singlepage/${item?.id}`)
} >
  <img className='image' src={item?.thumbnail} alt="nothing" />
  
  <h4 className='Card-title-name' >{item?.title} </h4>
  <h5 className='Card-price'>Price:Rs.{Math.round(item?.price*80)}</h5>
  {/* <h4>{item?.rating}</h4> */}
</div>




</>



    )
}
export default Cards;