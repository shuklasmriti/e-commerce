import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
<link rel="stylesheet" href="./Components/Pages/Login/Login.css" />
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: "kminchelle",
        password: '0lelplR',
      })
    });
    const data = await response.json();

    if (response.ok) {
      sessionStorage.setItem("userData", JSON.stringify(data));
      setTimeout(function () {
        toast.success("Log in Successfully !")
      }, 5000);

      navigate(-1)
    } else {
      console.error('Login failed');
      toast.warning(" Invalid Credential !")
    }
  };

  return (
    <>
      <ToastContainer limit={3}
        position="top-right"
        autoClose={5000}
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
              <button type='submit' className='sub-but'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login