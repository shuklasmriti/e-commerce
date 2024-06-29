import React from 'react';
import './App.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Navbar2 } from './Components/Navbar/Navbar2';
import { Home } from './Components/Pages/Home/Home';
import { About } from './Components/Pages/About-us/About';
import {Contact} from './Components/Pages/Contact-us/Contact';
import { Careers } from './Components/Pages/Careers/Careers';
import { Beauty} from './Components/Pages/Beauty/Beauty';
import {Mobile} from './Components/Pages/Mobile/Mobile';
import {Grocery} from './Components/Pages/Grocery/Grocery';
import {HomeFurniture} from './Components/Pages/HomeFurniture/HomeFurniture';
import { Dresses} from './Components/Pages/Dresses/Dresses';
import {Bikes} from './Components/Pages/Bikes/Bikes';
import { SinglePage } from './Components/SinglePage/SinglePage';
import { Cart } from './Components/Cart/Cart';
import Login from './Components/Pages/Login/Login';
import {Wishlist} from './Components/Pages/Wishlist/Wishlist';
import Modal from './Components/Modal/Modal';
import SearchPage from './Components/Pages/SearchPage/SearchPage';

export default  function App() {
  return (
    <>


<BrowserRouter>
<Navbar/> 
 <Navbar2/> 


<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/career' element={<Careers/>}/>
  <Route path='/grocery' element={<Grocery/>}/>
  {/* <Route path='/dresses' element={<SingleCategory cat={"womens-dresses"}/>}/> */}
  <Route path ='/dresses' element={<Dresses/>}/>
  <Route path='/beauty' element={<Beauty/>}/>
  {/* <Route path='/fashion' element={<Fashion />}/> */}
  <Route path='/mobile' element={<Mobile/>}/>
  <Route path='/homeandfurniture' element={<HomeFurniture/>}/>
  <Route path='/bikes' element={<Bikes />}/>
  <Route path='/singlepage/:id' element={<SinglePage />}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/wishlist' element={<Wishlist/>}/>
<Route path='/modal' element={<Modal/>}/>
<Route path='/searchpage' element={<SearchPage/>}/>


  </Routes>
  <Footer/>
</BrowserRouter>


 
</>
  )
};


