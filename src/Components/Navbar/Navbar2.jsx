import React from "react";
import { NavLink  } from "react-router-dom";
<link rel="stylesheet" href="./src/Component/Navbar/Navbar2.css" />;

export const Navbar2 = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? 'rgb(55, 120, 121)' : ''
  });
  return (
    <>
      <div className="navbar2">
        <div className="cont">
          <div className="grocery">
            <NavLink className="link" to={"/grocery"} style={getActiveStyle}>
              {" "}
              GROCERY
            </NavLink>
          </div>
          <div className="mobiles">
            {" "}
            <NavLink className="link" to={"/mobile"}style={getActiveStyle}>
              {" "}
              MOBILES
            </NavLink>
          </div>
          <div className="beauty">
            <NavLink className="link" to={"/beauty"}style={getActiveStyle}>
              BEAUTY-PRODUCTS
            </NavLink>
          </div>
          <div className="dresses">
            <NavLink className="link" to={"/dresses"}style={getActiveStyle}>
              {" "}
              DRESSES
            </NavLink>
          </div>

          <div className="home&furniture">
            <NavLink className="link" to={"/homeandfurniture"}style={getActiveStyle}>
              {" "}
              HOME & FURNITURE
            </NavLink>
          </div>
          <div className="beauty">
            <NavLink className="link" to={"/bikes"}style={getActiveStyle}>
              {" "}
              BIKES
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
