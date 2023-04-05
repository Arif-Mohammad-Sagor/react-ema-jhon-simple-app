import React from "react";

import './Product1.0.css'
import { FaShoppingCart } from "react-icons/fa";

const Product1 = (props) => {
  const { img, name, seller, price, ratings } = props.product;

  return (
    <>
      <div className="product-card">
        <img className="img" src={img && img} alt="mens shoes" />
        <div className="product-info">
          <p className="p-heading"> {name}</p>
          <p>Price :${price}</p>
          <p className="seller">Manufacturer: {seller}</p>
          <p className="ratings">Ratings: {ratings} star</p>
        </div>
        <div>
          <button
            onClick={() => props.handleAddToCart(props.product)}
            className="cart-btn"
          >
            Add to cart <FaShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product1;
