import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


<link rel="stylesheet" href="./Components/Slider/Slider.css" />
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:2000,
    vertical:'false',
  
  autoplay: true,         // Enable automatic sliding
  };

  return (
    <Slider 

    
 {...settings} >
  
      <div className=' pics pic1'>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3f1e054070b976e3.jpg?q=20" alt=""
      />
      </div>
   
      <div className=' pics pic2'>
       <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d8f36f29c576763d.jpeg?q=20" alt="" 
         />
      </div>
      <div className=' pics pic3'>
       <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d30ddbd5cb0fc865.jpg?q=20" alt="" 
      />
      </div>
 
      
    </Slider>
  );
};

export default SimpleSlider;
