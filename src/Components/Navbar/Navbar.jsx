import React, { useContext } from "react";
import { useState } from "react";
import FusionFindsLogo from "../Assets/logo2.png";
import Badge from "@mui/material/Badge";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { toast } from "react-toastify";

<link rel="stylesheet" href="./src/Components/Navbar/Navbar.css" />;

export const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
 


  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("userData"))
  );
  // const history = useNavigate();

const [dropdown,setDropdown]=useState(false);

  

  const logoutButtonHandler = () => {
    sessionStorage.removeItem("userData");
    setUserData("");
    // history.push("/");
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
      <div className="navbar-menu" >
        <div className="search">
             <form role="search" method="get" action="/searchpage">
               <div className="input-group">
              <input type="search" placeholder="Search your product" className="form-control" name="search"/>
              </div>
              </form>
            </div>

        <div className="icons">
          {/* <CiSearch size={23} className="icon1" /> */}
          <Link className="link" to="/">
            <FaHome size={23} className="icon2" />
          </Link>
          <Link className="link" to="/cart">
            <Badge
              badgeContent={cart?.length ?? 0}
              className="icon4"
              color="primary"
            >
              <FaShoppingCart size={23} className="icon4" />
            </Badge>
          </Link>

          <Link className="link" to="/wishlist">
            <Badge
              badgeContent={wishlist?.length ?? 0}
              className="icon5"
              color="primary"
            >
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
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={()=>setDropdown(!dropdown)}
              >
                <i>
                  <FaUser />
                </i>{" "}
                {userData.username}
              </Link>
            ) : (
              <Link to="/login" className="nav-link" id="login" role="button">
                {" "}
                <i>
                  <FaUser />
                </i>
                Login
              </Link>
            )}
                
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{display:dropdown?"block":"none"}}>
                <div>
                  <Link
                    to="#"
                    className="dropdown-item" 
                    onClick={logoutButtonHandler}
                  >
                    <i>
                      <FiLogOut />
                    </i>{" "}
                    Logout
                  </Link>
                </div>
              </div>
               
          </div>
        </div>
      </div>
    </div>
  );
};
