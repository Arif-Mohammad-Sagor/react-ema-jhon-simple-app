import React, { useEffect, useState } from 'react'

import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import { addToDb, getShoppingCart } from '../../../utilities/fakedb'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCarts] = useState([]);
  // const [reload, setReload] = useState(true);

    useEffect(() => {
        fetch('/public/products.json')
          .then((res) => res.json())
          .then((data) => setProducts(data));
    }, [])

  useEffect(() => {

    const storedProduct = getShoppingCart();
    const savedCart = [];

// step 1:get id of the addedProduct
    for (const id in storedProduct) {

      // step 2: get product from products state by using id
      const addedProduct = products.find((pd) => pd.id === id);

      if (addedProduct) {
        // step-3: add quantity
        const quantity = storedProduct[id];
        addedProduct.quantity = quantity;
        // step-4: add the added product to the saved card
        savedCart.push(addedProduct);
      }
    }
    // step-5: set the cart
    setCarts(savedCart);
  }, [products]);



  const handleAddToCart = (product) => {

    addToDb(product.id);
    let newCart = [];

     const exists = cart.find((pd) => pd.id === product.id);
     if (!exists) {
       product.quantity = 1;
       newCart = [...cart, product];
     } else {
       exists.quantity = exists.quantity + 1;
       const remaining = cart.filter((pd) => pd.id !== product.id);
       newCart = [...remaining, exists];
     }

    setCarts(newCart);


    // const existsProduct =
    // const newCart =[...cart,product]
    // setCarts(newCart)
  //   setReload(!reload);
   };


  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default Shop