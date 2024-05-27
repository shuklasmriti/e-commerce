import React from "react"
import skincare from '../Fashion/skincare.png'
import frag from '../Fashion/Fragrance.png'


<link rel="stylesheet" href="./Components/Pages/Fashion/Fashion.css" />;
export const Fashion = () => {
  return (
    <div className="fashion-body">
      <div className="fashion-heading">
        <h2>SHOP BY CATEGORY</h2>
      </div>
      <div className="category-body">
        <div className="box fregrances">
<img src={frag} alt="" />
        </div>
        <div className="box skincare">
        <img src={skincare} alt="" />
        </div>
        <div className="box tops">
        <img src={skincare} alt="" />

        </div>
        <div className="box women-dresses">
        <img src={skincare} alt="" />

        </div>
        <div className="box women-shoes">
        <img src={skincare} alt="" />

        </div>
        <div className="box sunglasses">
        <img src={skincare} alt="" />

        </div>
        <div className="box men-shirt">
        <img src={skincare} alt="" />

        </div>
        <div className="box men-shoes">
        <img src={skincare} alt="" />

        </div>
        <div className="box women-watches">
        <img src={skincare} alt="" />

        </div>
        <div className="box men-watches">
        <img src={skincare} alt="" />

        </div>
        <div className="box women-bag">
        <img src={skincare} alt="" />

        </div>
        <div className="box women-jwelry">
        <img src={skincare} alt="" />

        </div>
      </div>
    </div>

  );
};
