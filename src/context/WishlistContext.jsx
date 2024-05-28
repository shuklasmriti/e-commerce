import React ,{createContext , useState} from "react";

const WishlistContext =createContext();

const WishlistProvider=({children})=>{

    const [wishlist,setWishlist]=useState([]);

    const Wishlist =(item)=>{
        if(!wishlist?.includes(item))
setWishlist([...wishlist,item]);
    };

    const removeFromWishlist=(itemId)=>{
  setWishlist(wishlist.filter((item)=>item.id !== itemId));
    };
    const handleAddToWishlist = (item) => {
        if (!wishlist?.includes(item)) {
          Wishlist(item);
        } else {
          removeFromWishlist(item.id);
        }
      };

    return(
<WishlistContext.Provider value={{wishlist ,Wishlist, removeFromWishlist,handleAddToWishlist}}>
    {children}
</WishlistContext.Provider>


    );
};
export {WishlistProvider,WishlistContext};