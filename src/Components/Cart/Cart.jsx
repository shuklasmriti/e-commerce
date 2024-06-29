import React, { useState } from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import Modal from "../Modal/Modal";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRazorpay from "react-razorpay";

export const Cart = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Razorpay] = useRazorpay();
  const buyNow = async () => {
    if (name === "" || address === "" || pincode === "" || phoneNumber === "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    const finalprice=Math.round(totalPrice*100);
   
    var options = {
      key: "rzp_test_9V2hrDbFaDSxRx",
      key_secret: "QMon4B7R9fzFwUB4eyKnXjyM",
      amount: finalprice,
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "FusionFinds",
      description: "for testing purpose",
      image: ".favicon/favicon.png",
      prefill: {
        name: "FusionFinds",
        email: "shuklasmriti83@gmail.com",
        contact: "7905380431",
      },
      handler: function (response) {
        toast.success("Payment Successful");
      },

      theme: {
        color: "#3399cc",
      },
    };
    const rzpay = new Razorpay(options);
    rzpay.open();
  };

  const { cart, removeFromCart, modifyCartItemQuantity } =
    useContext(CartContext);

  const increment = (itemId) => {
    let item = cart.find((item) => item.id === itemId);
    if (item) {
      console.log("Incrementing item:", item);
      modifyCartItemQuantity(itemId, (item.quantity || 0) + 1);
    } else {
      console.warn(`Item with id ${itemId} not found in cart`);
    }
  };
  const decrement = (itemId) => {
    let item = cart.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      console.log("Decrementing item:", item);
      modifyCartItemQuantity(itemId, (item.quantity || 0) - 1);
    } else {
      console.warn(
        `Item with id ${itemId} not found in cart or quantity is already 1`
      );
    }
  };

  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item.price * (item.quantity || 1) ); // Multiply by quantity and currency conversion rate
  }, 0);
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + (item.quantity || 1);
  }, 0);

  return (
    <>
      <div className="cart">
        <div className="cart-body">
          {cart.length ===0 ?(
            // <h1>Cart is empty!</h1>
            <div className="cart-is-empty" >

          <img  src="data:image/jpeg;base64,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"
          alt="nothing in cart"/>
</div>
          ):(
          cart?.map((item) => (
            <div className="cart-container" key={item?.id}>
              <div className="cart-image">
                <img src={item?.thumbnail} alt="" />
                {item?.title}
              </div>
              <div className="paisa">
                <h4>$ {item?.price}</h4>
              </div>

              <div className="quant">
                <button className="bt" onClick={() => decrement(item.id)}>
                  -
                </button>
                <input
                  className="number"
                  type="text"
                  value={item.quantity || 1}
                  readOnly
                />

                <button className="bt2" onClick={() => increment(item.id)}>
                  +
                </button>
                <button
                  className="delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  <MdDelete className="delete-icon" />
                </button>
              </div>
            </div>
          ))
          )}
        </div>
 {cart.length >0 &&(
        <div className="payment-body">
          <div className="payment-heading">
            <u>Product Summary</u>
          </div>
          <div className="payment-list">
            <span>Total Items:{totalQuantity}</span>
            <span>Total Price:: Rs.{totalPrice}</span>
          </div>

          <Modal
            name={name}
            address={address}
            pincode={pincode}
            phoneNumber={phoneNumber}
            setName={setName}
            setAddress={setAddress}
            setPincode={setPincode}
            setPhoneNumber={setPhoneNumber}
            buyNow={buyNow}
          />
        </div>
 )}
      </div>
    </>
  );
};
