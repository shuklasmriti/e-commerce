import React from 'react'
import { Link } from 'react-router-dom'
<link rel="stylesheet" href="./src/Component/Navbar/Navbar2.css" />

export const Navbar2 = () => {
  return (
<>

<div className="navbar2">

  <div className="container">
    <div className='grocery'> <Link className='link' to={'/grocery'}>  GROCERY 
  {/* <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="" /> */}
</Link>
    </div>
    <div className='mobiles'> <Link className='link' to={'/mobile'}> MOBILES
    {/* <img src="https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" alt="" /> */}
    </Link>
    </div>
    {/* <div className='fashion'><Link className='link' to={'/fashion'}>   FASHION
    {/* <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" alt="" /> */}
    {/* </Link></div> */} 
    <div className='beauty'><Link className='link' to={'/beauty'}>BEAUTY-PRODUCTS
    {/* <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" /> */}
    </Link></div>
    <div className='dresses'><Link className='link' to={'/dresses'}> DRESSES
    {/* <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"  alt="" /> */}
    </Link>
    </div>

    <div className='home&furniture'><Link className='link' to={'/homeandfurniture'}> HOME & FURNITURE
    {/* <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" /> */}
    </Link>
    </div>
    <div className='beauty'><Link className='link' to={'/bikes'}> BIKES
    {/* <img src="https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" alt="" /> */}
    </Link>
    </div>

  </div>

</div>


</>



    )
}
