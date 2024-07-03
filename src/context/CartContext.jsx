// import React, { createContext, useEffect, useState } from 'react';

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     if(!cart?.includes(item))
//     setCart([...cart,item]);
//     // console.log(item);

//   };

//   const removeFromCart = (itemId) => {
//     setCart(cart.filter((item) => item.id !== itemId));
//   };



// const modifyCartItemQuantity = (itemId, itemQuantity) => {
//   let cartCopy = [...cart];
//   let modifiedItem = cartCopy.find((item) => item.id === itemId);

//   if (modifiedItem) {
//       modifiedItem.quantity = itemQuantity; // Ensure itemQuantity is a number
//       setCart(cartCopy);
//   } else {
//       console.warn(`Item with id ${itemId} not found in cart`);
//   }
// };



// useEffect(()=>{
// // console.log(cart)
// },[cart])


//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart ,modifyCartItemQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export { CartProvider, CartContext };



import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState({
    orderId: "",
    amount: '',
  });

  const addToCart = (item) => {
    if (!cart?.includes(item)) setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const modifyCartItemQuantity = (itemId, itemQuantity) => {
    let cartCopy = [...cart];
    let modifiedItem = cartCopy.find((item) => item.id === itemId);

    if (modifiedItem) {
      modifiedItem.quantity = itemQuantity; // Ensure itemQuantity is a number
      setCart(cartCopy);
    } else {
      console.warn(`Item with id ${itemId} not found in cart`);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    // console.log(cart)
  }, [cart]);

  const setPaymentInfo = (details) => {
    setPaymentDetails(details);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, modifyCartItemQuantity, paymentDetails, setPaymentInfo,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
