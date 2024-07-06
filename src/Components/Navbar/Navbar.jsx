import React, { useContext, useState } from "react";
import FusionFindsLogo from "../Assets/logo2.png";
import Badge from "@mui/material/Badge";
import { FaUser, FaShoppingCart, FaHeart, FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { toast } from "react-toastify";
import useSearch from "../../Hook/useSearch";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { searchInput, searchChangeHandeler } = useSearch();
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("userData"))
  );
  const [dropdown, setDropdown] = useState(false);

  const logoutButtonHandler = () => {
    sessionStorage.removeItem("userData");
    setUserData("");
    toast.success("Logout Successfully");
    setDropdown(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={FusionFindsLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="search">
          <form role="search" method="get" action="/searchpage">
            <div className="input-group">
              <input
                value={searchInput}
                type="text"
                placeholder="Search your product"
                className="form-control"
                name="search"
                onChange={searchChangeHandeler}
              />
            </div>
          </form>
        </div>

        <div className="icons">
          <Link className="link" to="/">
            <FaHome size={23} className="icon2" />
          </Link>
          <Link className="link" to="/cart">
            <Badge badgeContent={cart?.length ?? 0} className="icon4" color="primary">
              <FaShoppingCart size={23} className="icon4" />
            </Badge>
          </Link>

          <Link className="link" to="/wishlist">
            <Badge badgeContent={wishlist?.length ?? 0} className="icon5" color="primary">
              <FaHeart size={23} className="icon5" />
            </Badge>
          </Link>

          <div className={userData ? "nav-item dropdown" : "nav-item"}>
            {userData ? (
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                aria-expanded="false"
                onClick={() => setDropdown(!dropdown)}
              >
                <FaUser /> {userData.username}
              </Link>
            ) : (
              <Link to="/login" className="nav-link" id="login" role="button">
                <FaUser /> Login
              </Link>
            )}
            {userData && (
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ display: dropdown ? "block" : "none" }}>
                <Link to="#" className="dropdown-item" onClick={logoutButtonHandler}>
                  <FiLogOut /> Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hamburger"  onClick={toggleMenu}>
      <RxHamburgerMenu style={{ width:"20px" , height:"37px"}}  />
        {/* <div className="bar"></div> */}
        {/* <div className="bar"></div> */}
        {/* <div className="bar"></div>  */}
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/cart" onClick={toggleMenu}>Cart</Link>
        <Link to="/wishlist" onClick={toggleMenu}>Wishlist</Link>
        
        {userData ? (
          <Link to="#" onClick={() => { logoutButtonHandler(); toggleMenu(); }}>Logout</Link>
        ) : (
          <Link to="/login" onClick={toggleMenu}>Login</Link>
        )}

<div className="search">
          <form role="search" method="get" action="/searchpage">
            <div className="input-group">
              <input
                value={searchInput}
                type="text"
                placeholder="Search your product"
                className="form-control"
                name="search"
                onChange={searchChangeHandeler}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
