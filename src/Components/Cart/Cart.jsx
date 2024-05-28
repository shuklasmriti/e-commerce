import React, { useState } from "react";
import { useContext  } from "react";

import Modal from "../Modal/Modal";
import { CartContext } from "../../context/CartContext";
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addDoc, collection } from 'firebase/firestore';
// import { Link } from "react-router-dom";
import useRazorpay from "react-razorpay";
export const Cart = () => {
  // const [count, setCount] = useState(1);

const [name,setName]=useState("")
const [address,setAddress] =useState("")
const [pincode,setPincode] =useState("")
const [phoneNumber,setPhoneNumber] =useState("")
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
      })
    }
    // const addressInfo = {
    //   name,
    //   address,
    //   pincode,
    //   phoneNumber,
     
    // }
    var options = {
      key: "rzp_test_9V2hrDbFaDSxRx"
      ,
      key_secret: "QMon4B7R9fzFwUB4eyKnXjyM",
      // amount: parseInt(price * 100 ),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "FusionFinds",
      description: "for testing purpose",
      image: ".favicon/favicon.png",
      prefill: {
        name: "FusionFinds",
        email: "shuklasmriti83@gmail.com",
        contact: "7905380431",
      },
      handler: function (response) {

        // console.log(response)
        toast.success('Payment Successful')
          // console.log(response, "data in response")
        // const paymentId = response.razorpay_payment_id

        // console.log(paymentId, "data in paymentId")

        // store in firebase 
        // const orderInfo = {
        //   // cartItems,
        //   // addressInfo,
        //   date: new Date().toLocaleString(
        //     "en-US",
        //     {
        //       month: "short",
        //       day: "2-digit",
        //       year: "numeric",
        //     }
        //   ),
        //   email: JSON.parse(localStorage.getItem("user")).user.email,
        //   userid: JSON.parse(localStorage.getItem("user")).user.uid,
        //   paymentId
        // }

        // try {
        //   const result = addDoc(collection(fireDB, "orders"), orderInfo)
        // } catch (error) {
        //   console.log(error)
        // }
      },

      theme: {
        color: "#3399cc"
      }
    };
    const rzpay = new Razorpay(options);
    rzpay.open();
  }

 
  const { cart,  removeFromCart ,modifyCartItemQuantity } = useContext(CartContext);
//  const[isAdded,setIsAdded]=useState(false);

  // const handleDelete = (id) => {
  //   removeFromCart(id);

  // };

 





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
      console.warn(`Item with id ${itemId} not found in cart or quantity is already 1`);
  }
};

  const totalPrice = cart.reduce((acc, item) => {
    return acc + (Math.round(item.price*(item.quantity || 1) * 80)); // Multiply by quantity and currency conversion rate
  }, 0);
 const totalQuantity =cart.reduce((acc,item)=>{
  return acc +(item.quantity||1);
 },0);

  // const totalPrice = cart.reduce((acc, item) => {
  //   const itemTotal = item?.price * item?.quantity * 80; 
  //   return acc +itemTotal;
  //   console.log(itemTotal);
  
  
  // }, 0);
  return (

<>
    <div className="cart">
    <div className="cart-body">
   

      {cart?.map((item)=>(
        <div className="cart-container" key={item?.id}>
        <div className="cart-image">
          <img src={item?.thumbnail} 
      alt="" />
          </div>
       

        <div className="quant">
          <button className="bt" onClick={() => increment(item.id)} >
            +
          </button>
          {/* <div className="number">{item?.quantity}</div>
           */}
           <input className="number" type="text" value={item.quantity || 1} readOnly/>
          <button className="bt" onClick={() => decrement(item.id)}>
            -
          </button>
          <button onClick={()=>removeFromCart(item.id)}   >Delete</button>

        </div>

        <div className="paisa">
          <h4>Rs.{Math.round(item?.price*80)}</h4>
        </div>


        
      </div>
      ))}

      
    </div>

<div className="payment-body">
<div className="payment-heading"><u>Product Summary</u></div>
<div className="payment-list">
  <span>Total Items:{totalQuantity}</span>
  <span>Total Price:: Rs.{totalPrice}

  </span>
</div>


<Modal name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow} 
            />



{/* <Link className="link" to='/payment'>
<button className="order"  >  Place Order </button>
</Link> */}
</div>

</div>
</>
  );
};


