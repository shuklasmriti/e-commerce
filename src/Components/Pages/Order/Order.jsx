import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const { cart,clearCart} = useContext(CartContext);
  const navigate = useNavigate();

  
  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item.price * (item.quantity || 1) ); // Multiply by quantity and currency conversion rate
  }, 0);
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + (item.quantity || 1);
  }, 0);
  // const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleBackToHome = () => {
    clearCart();
    navigate("/");
  };

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>
      <h2>Payment Details</h2>
      {/* <p><strong>Order ID:</strong> {paymentDetails.id || "N/A"}</p> */}
      {/* <p><strong>Amount Paid:</strong> ₹{(paymentDetails.amount / 100)?.toFixed(2) || "0.00"}</p> */}
      <p><strong>Payment Method:</strong> Razorpay</p>
      <h2>Items</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>Product Id:{item.id}</p>
            <p>Name:{item.title}</p>
            {/* <p>Quantity: {item.quantity}</p> */}
            <p>Price: ₹{item.price}</p>
            <p>Discount:{item.discountPercentage}</p>
            <p>Shipping information:{item.shippingInformation}</p>
            <p>{item.returnPolicy}</p>
          </li>
        ))}
      </ul>
      <h2>Total Price</h2>
      <p>${totalPrice}</p>
      <h2>Total Quantity</h2>
      <p>{totalQuantity}</p>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default OrderSummary;
