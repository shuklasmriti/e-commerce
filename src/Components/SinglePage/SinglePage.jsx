import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useParams ,useNavigate} from "react-router-dom";

import { useState, useEffect } from "react";

import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

<link rel="stylesheet" href="./Components/SinglePage/SinglePage.css" />;

export const SinglePage = () => {
  const { id } = useParams();
  const navigate=useNavigate();

  const { addToCart, cart } = useContext(CartContext);
  const {  wishlist ,handleAddToWishlist } = useContext(WishlistContext);

  const [categoryData, setCategoryData] = useState({});
console.log(cart);
 

  useEffect(() => {

    const fetchCategoryData = async () => {
      try {
        const res = await fetch(` https://dummyjson.com/products/${id}`);
        const jsonn = await res.json();
        setCategoryData(jsonn);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchCategoryData();
  }, [id]);
console.log(categoryData)
console.log(wishlist)
  return (
    <div className="SinglePage">
      <div className="image-content">
        <div className="single-image">
          <img src={categoryData?.thumbnail} alt="" />
        </div>
        <div className="cart-content">
          <div className="price">Price:Rs.{Math.round(categoryData?.price * 80)}</div>
          <div className="cart">

            
            <button onClick={() =>  {  if (cart?.find(item =>item.id===categoryData.id)) {
                  navigate('/cart')
                } else {
                  addToCart(categoryData)
                }
                }}  >
              {cart?.find((item)=>item.id===categoryData.id)
             ? "Go To Cart" : "Add To Cart"}
          
         <FaShoppingCart size={17} />
            </button>
          </div>
          <div className="wishlist-btn">
            <button onClick={() => {if (wishlist?.find(item=>item?.id===categoryData?.id))
              navigate('/wishlist')
            
            else
         handleAddToWishlist(categoryData);
            }
              
            }>
              {wishlist?.find(item=>item?.id===categoryData?.id)
                ? "Remove "
                : "Add to wishlist"}
              <FaHeart size={17} />
            </button>
          </div>
        </div>
      </div>
      <div className="description-content">
        <div className="single-title">{categoryData?.title}</div>
        <div className="single-description">{categoryData?.description}</div>
      </div>
    </div>
  );
};
