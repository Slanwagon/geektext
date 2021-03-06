import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        {/*logo*/}
        <img className="header__logo" src={logo}></img>
      </Link>

      {/*search bar*/}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/*Sign in option in the navigation bar*/}
        <div className="header__option">
          <span className="header__optionLineOne">Sign In</span>
        </div>

        {/*Shopping Cart*/}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineOne  header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
