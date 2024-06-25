import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
<link rel="stylesheet" href="./Components/Pages/Login/Login.css" />
function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');


  const handleSubmit = async (e) => {
    e.preventDefault();
   

    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    });
    const data = await response.json();
    if (data.message !== "Invalid credentials") {
      toast.success("Login Successfully!");
      const wholeData = await fetch("https://dummyjson.com/user/me", {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer '+data.token,
          },
      })

      const userData = await wholeData.json();
      sessionStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
      window.location.reload(true);
      
  }else{
      toast.error("Invalid Credential!")
  }
  
  }

  return (
    <>
      <ToastContainer limit={3}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
      <div className=' outer-container '>
        <div className=' inner-container '>
          <h1 className='heading-cont'>Welcome To FusionFinds</h1>
          {/* <img className='w-24 h-18' src='./Components/Assets/FusionFindsLogo.png' alt='Error' /> */}
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='username'
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='username'
            />
            <div className='submit-cont'>
              <button type='submit' className='sub-but' onClick={handleSubmit}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login