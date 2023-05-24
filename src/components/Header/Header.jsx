import React from "react";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo" style={{ width: "20vw" }} />
      </a>
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
      </nav>
    </header>
  );
};

export default Header;
