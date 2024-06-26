import React,{useEffect,useState} from 'react'
import { useContext } from 'react';
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
    <div className="wish-heading">
      Product
    </div>
    <div className="wish-image">
    <img src={item?.thumbnail} alt="" />
    </div>
    <div className="buttons">
    <button  onClick={()=>addToCart(item)} >
      <Link className= 'link' to='/wishlist'  >
      Add To Cart
      </Link></button>
      <button  onClick={()=> handleDelete(item.id)}  >Delete</button>
      <button  >
        
        <Link className='link' to='/'>Home
        </Link></button>
<h4 className='price-of-item'>Price:Rs.{item?.price*80}</h4>
      </div>
  </div>
</div>
))}
  <p className='total'>Total items in wishlist: {wishlistCount}</p>

</div>
</>

    )
}
export default Wishlist;