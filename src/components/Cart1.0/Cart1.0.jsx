import React from 'react'
import './Cart1.0.css'

const Cart1 = ({ cart }) => {




    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart) {

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    let Tax = totalPrice * 10 / 100;
    let GrandTotal = totalPrice + totalShipping + Tax;
    
  return (
    <div className="cart">
      <h3 style={{ textAlign: "center" }}>Order Summary </h3>
          <p style={{ margin: "5px" }}>Selected Item : {quantity}</p>
          <p style={{ margin: "5px" }}>Price : ${ totalPrice} </p>
          <p style={{ margin: "5px" }}>Shipping : { totalShipping}</p>
          <p style={{ margin: "5px" }}>Tax :{ Tax}</p>
          <p style={{ margin: "5px" }}>GrandTotal: {GrandTotal}</p>
    </div>
  );
}

export default Cart1