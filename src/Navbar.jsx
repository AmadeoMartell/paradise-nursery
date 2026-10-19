import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * Navigation bar shared by the Product Listing and Cart pages.
 * Shows a cart icon with the total number of items in the cart.
 */
export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Paradise Nursery</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          Cart <span className="cart-icon">({count})</span>
        </Link>
      </div>
    </nav>
  );
}
