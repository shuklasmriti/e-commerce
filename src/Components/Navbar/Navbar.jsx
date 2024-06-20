import React, { useContext } from "react";
import { useState } from "react";
import FusionFindsLogo from "../Assets/logo2.png";
import Badge from "@mui/material/Badge";
// import Search from "../Search/Search";
import { CiSearch } from "react-icons/ci";
// import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

<link rel="stylesheet" href="./src/Components/Navbar/Navbar.css" />;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [searchResults, setSearchResults] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
        .then((res) => res.json())
        // .then(console.log);
        .then((data) => {
          setSearchResults(data?.results);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={FusionFindsLogo} alt="" />
        </Link>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`navbar-menu ${isOpen ? 'show' : ''}`} >
        <div className="search">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type something and press Enter"
          />
          {/* {isLoading && <p>Loading...</p>} */}
          <ul>
            {searchResults?.map((result) => (
              <li key={result?.id}>{result?.name}</li>
            ))}
          </ul>
        </div>

        <div className="icons">
          <CiSearch size={23} className="icon1" />
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

          <button className="but">
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
