import React,{useEffect,useState} from 'react'
import { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdDelete, MdHeight } from "react-icons/md";

// import { SinglePage } from '../../SinglePage/SinglePage';
import { CartContext } from '../../../context/CartContext';
import { WishlistContext } from '../../../context/WishlistContext';
// import Cart from '../../Cart/Cart';
import {Link} from 'react-router-dom'
// import { WishlistContext } from '../../../context/WishlistContext'; 

<link rel="stylesheet" href="./Components/Pages/Wishlist/Wishlist.css" />;

export const Wishlist = () => {
  const {addToCart}=useContext(CartContext);
const {wishlist ,removeFromWishlist }=useContext(WishlistContext)


const[wishlistCount,setWishlistCount]=useState(0);

useEffect(()=>
{
  setWishlistCount(wishlist.length);
},[wishlist]);

const handleDelete = (id) => {
  removeFromWishlist(id);
};


  return (
<>
<div className="wish">
{wishlist?.map((item)=>(
<div className="wish-body">
  <div className="wish-card">
    {/* <div className="wish-heading"> */}
      {/* Product
    </div> */}
    <div className="wish-image">
    <img src={item?.thumbnail} alt="" />
<h4 className='price-of-item'>$ {item?.price}</h4>

    </div>
    <div className="buttons">
    <button  onClick={()=>addToCart(item)} >
      <Link className= 'link' to='/wishlist'  >
      <FaShoppingCart className='add-to-cart'/>
      </Link></button>
      <button  onClick={()=> handleDelete(item.id)}  > <MdDelete className='add-to-delete'/> </button>
      <button  >
        
        <Link className='link' to='/'> <FaHome className='add-to-home'/>
        </Link></button>
      </div>
  </div>
</div>
))}
<div>
  {wishlistCount <1 &&(
  // <p className='total'>Your Wishlist is Empty!
  
  <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" />
  
  // </p>
  
  )}

  </div>
</div>
</>

    )
}
export default Wishlist;