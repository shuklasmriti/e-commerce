import React from 'react'
import { Link } from 'react-router-dom'

import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

<link rel="stylesheet" href="./src/Components/Footer/Footer.css" />
export const Footer = () => {

 


  return (
    <>
      <div className='Footer'>
        <div className="footer-container">
          <div className="connect">
            <h3>Connect with us..</h3>
            <span><a className='link'  href='https://www.instagram.com/smritishukla_83?igsh=cjl4NGVidmRrd214'> Instagram  <FaSquareInstagram />  </a></span>
            <span><a  className='link' href='https://www.facebook.com/smriti.shukla.5095110?mibextid=ZbWKwL'> Facebook  <FaFacebookSquare /> </a></span>
            <span><a className='link'  href='https://twitter.com/SmritiS10675064?t=5WNgUJ9S7DzJK9mRvf_4yg&s=09'> Twitter <FaSquareXTwitter /> </a></span>
          </div>

          <div className="know">
            <h3>Get to know us..</h3>
            <span><Link className='link' to={"/about"} >  About Us</Link></span>
            <span><Link className='link' to={"/contact"}> Contact Us</Link></span>
            <span><Link className='link' to={"/career"}>   Careers</Link></span>

          </div>

          <div className="online-shopping">
            <h3>
              Online Shopping..
            </h3>
            <span> <Link className='link' to={"/mobile"}> Mobile</Link></span>
            <span> <Link className='link' to={"/fashion"}>  Fashion</Link></span>
            <span> <Link className='link' to={"/grocery"}>  Grocery</Link></span>
            <span> <Link className='link' to={"/lighting"}>  Lighting</Link></span>
            <span> <Link className='link' to={"/appliances"}>  Appliances</Link></span>
            <span> <Link className='link' to={"/homeandfurniture"}>  Home & Furniture</Link></span>
            <span> <Link className='link' to={"/toysandmore"} > Toys & more</Link></span>
          </div>

          <div className="address">
            <h3>Address..</h3>
            <p>
              FusionFinds pvt limited,
              Building alyssa,Begonia &
              Clove Embassy Tech Village,
              Outer Ring Road,
              Bengaluru ,560103,<span/>
              Karnataka ,India<span></span>
              CIN :UK36958DBVJSD
              Telephone:0044-45622594

            </p>
          </div>


        </div>

<hr/>

  <div className="copy">Copyright 2024.All Rights Reserved.@FusionFinds.Smriti shukla
      </div>
      </div>  
    </>
  )
}
