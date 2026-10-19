import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./CartSlice";

/**
 * Product listing for Paradise Nursery.
 * Plants are grouped into three categories, each with at least six unique
 * houseplants (thumbnail, name, price). "Add to Cart" adds the product to the
 * cart, disables itself once the product has been added, and the navbar cart
 * icon count grows with every item added.
 */
const PLANTS = [
  {
    category: "Indoor Plants",
    products: [
      { id: "indoor-1", name: "Snake Plant", price: 24.99, image: "./images/snake-plant.jpg" },
      { id: "indoor-2", name: "Monstera Deliciosa", price: 32.5, image: "./images/monstera.jpg" },
      { id: "indoor-3", name: "Peace Lily", price: 27.0, image: "./images/peace-lily.jpg" },
      { id: "indoor-4", name: "Pothos", price: 18.75, image: "./images/pothos.jpg" },
      { id: "indoor-5", name: "ZZ Plant", price: 22.4, image: "./images/zz-plant.jpg" },
      { id: "indoor-6", name: "Fiddle Leaf Fig", price: 45.0, image: "./images/fiddle-leaf-fig.jpg" },
    ],
  },
  {
    category: "Outdoor Plants",
    products: [
      { id: "outdoor-1", name: "Hydrangea", price: 29.9, image: "./images/hydrangea.jpg" },
      { id: "outdoor-2", name: "Japanese Maple", price: 68.0, image: "./images/japanese-maple.jpg" },
      { id: "outdoor-3", name: "Lavender", price: 16.5, image: "./images/lavender.jpg" },
      { id: "outdoor-4", name: "Hostas", price: 21.25, image: "./images/hostas.jpg" },
      { id: "outdoor-5", name: "Rose Bush", price: 34.99, image: "./images/rose-bush.jpg" },
      { id: "outdoor-6", name: "Holly", price: 26.75, image: "./images/holly.jpg" },
    ],
  },
  {
    category: "Succulents",
    products: [
      { id: "succulent-1", name: "Echeveria", price: 12.5, image: "./images/echeveria.jpg" },
      { id: "succulent-2", name: "Sedum", price: 11.0, image: "./images/sedum.jpg" },
      { id: "succulent-3", name: "Aloe Vera", price: 14.25, image: "./images/aloe-vera.jpg" },
      { id: "succulent-4", name: "Haworthia", price: 13.75, image: "./images/haworthia.jpg" },
      { id: "succulent-5", name: "Jade Plant", price: 19.99, image: "./images/jade-plant.jpg" },
      { id: "succulent-6", name: "Cactus Mix", price: 15.5, image: "./images/cactus-mix.jpg" },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      {PLANTS.map((group) => (
        <section className="category" key={group.category}>
          <h2>{group.category}</h2>
          {group.products.map((plant) => (
            <div className="product" key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <div className="product-info">
                <h3>{plant.name}</h3>
                <p className="price">${plant.price.toFixed(2)}</p>
              </div>
              <button
                className="add-to-cart"
                disabled={isAdded(plant.id)}
                onClick={() => dispatch(add(plant))}
              >
                {isAdded(plant.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
