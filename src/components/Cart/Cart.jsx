import React from 'react'

import './Cart.css'

const Cart = ({ cart }) => {

  let totalPrice = 0;
  let shippingTotal = 0;
  let quantity = 0;

  for (const product of cart) {
// setting here minimum value of quantity
    // product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    shippingTotal = shippingTotal + product.shipping;
    // updating here quantity
    quantity = quantity +product.quantity;

  }
  console.log(totalPrice);
  let tax = totalPrice * 7 / 100;
  let grandTotal = totalPrice + shippingTotal + tax;


  return (
      <div>
          <h3 style={{ textAlign: "center", }}>Order summery</h3>
          <h5>Selected items :{quantity }</h5>
          <h5>Price: ${totalPrice }</h5>
          <h5>Shipping :{shippingTotal }</h5>
          <h5>Tax : {tax.toFixed(2) }</h5>
          <h5>Grand Total :{grandTotal.toFixed(2) }</h5>
    </div>
  )
}

export default Cart