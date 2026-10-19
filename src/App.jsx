import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

/**
 * Paradise Nursery landing page: company name and a "Get Started" button.
 */
function Landing() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Bring nature into your home.</p>
      <Link to="/plants">
        <button className="get-started">Get Started</button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/plants" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
