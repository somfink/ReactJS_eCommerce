import { useContext, useEffect, useState } from "react";

import { IoMdCart } from "react-icons/io";
import { FcShop } from "react-icons/fc";

import "./Navbar.scss";
import CartContext from "../../store/CartContext/CartContext";
import { Link } from "react-router-dom";
import ScrollContext from "../../store/ScrollContext/ScrollContext";

const Navbar = () => {
  const modalCtx = useContext(CartContext);
  const scrollCtx = useContext(ScrollContext);

  const cartBadgeInfoHandler = () => {
    let itemsAmount = 0;
    modalCtx.items.map((item) => (itemsAmount += item.amount));
    return itemsAmount > 9 ? "9+" : itemsAmount;
  };

  return (
    <nav className={`navbar ${scrollCtx.scrollPosition > 5 ? 'fixed' : ''}`}>
      <Link to='/' className="navbar-logo">
        <span className="navbar-logo__icon">
          <FcShop />
        </span>
        <span className="navbar-logo__name">ReactJS eCommerce</span>
      </Link>
      <div className="navbar-cart">
        <IoMdCart onClick={modalCtx.onShowCartModal} />
        <span className="navbar-cart__badge">{cartBadgeInfoHandler()}</span>
      </div>
    </nav>
  );
};

export default Navbar;
