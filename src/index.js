import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App component ka import
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';


ReactDOM.render(
  <React.StrictMode>
 
    <CartProvider>
      <WishlistProvider>
    <App />
    </WishlistProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root') // HTML main div jo id 'root' se refer kiya gaya hai
);


