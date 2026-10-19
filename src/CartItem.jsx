import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "./CartSlice";

/**
 * Shopping Cart page for Paradise Nursery.
 * Shows the total cart amount, the total cost per plant, thumbnails, names,
 * unit prices, increase/decrease quantity buttons (updateQuantity()),
 * delete buttons (removeItem()), a checkout button that reports "Coming Soon"
 * and a continue shopping link back to the product listing.
 */
export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <p className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</p>

      {items.length === 0 && <p>Your cart is empty. Add some plants!</p>}

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p className="unit-price">Unit price: ${item.price.toFixed(2)}</p>
            <p className="line-total">
              Total cost: ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
          <div className="quantity-controls">
            <button
              className="increase"
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
              }
            >
              +
            </button>
            <span className="quantity">{item.quantity}</span>
            <button
              className="decrease"
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
              }
            >
              −
            </button>
            <button className="delete" onClick={() => dispatch(removeItem({ id: item.id }))}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <button className="checkout" onClick={() => alert("Checkout is Coming Soon!")}>
        Checkout
      </button>
      <Link to="/plants" className="continue-shopping">
        Continue Shopping
      </Link>
    </div>
  );
}
