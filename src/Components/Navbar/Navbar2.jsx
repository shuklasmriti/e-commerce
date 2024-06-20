import React from "react";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="./src/Component/Navbar/Navbar2.css" />;

export const Navbar2 = () => {
  return (
    <>
      <div className="navbar2">
        <div className="cont">
          <div className="grocery">
            <Link className="link" to={"/grocery"}>
              {" "}
              GROCERY
            </Link>
          </div>
          <div className="mobiles">
            {" "}
            <Link className="link" to={"/mobile"}>
              {" "}
              MOBILES
            </Link>
          </div>
          <div className="beauty">
            <Link className="link" to={"/beauty"}>
              BEAUTY-PRODUCTS
            </Link>
          </div>
          <div className="dresses">
            <Link className="link" to={"/dresses"}>
              {" "}
              DRESSES
            </Link>
          </div>

          <div className="home&furniture">
            <Link className="link" to={"/homeandfurniture"}>
              {" "}
              HOME & FURNITURE
            </Link>
          </div>
          <div className="beauty">
            <Link className="link" to={"/bikes"}>
              {" "}
              BIKES
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
