import React, { useEffect, useState } from 'react'

import Product1 from '../Product1.0/product1.0';
import './Shop1.0.css'
import { addToDb, getShoppingCart} from '../../../utilities/fakedb';
import Cart1 from '../Cart1.0/Cart1.0';

const Shop1 = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    useEffect(() => {

        const savedCart = [];

        const storedCart = getShoppingCart();

        for (const id in storedCart) {

            const addedProduct = products.find(pd => pd.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);

            }
        }
        setCart(savedCart);

    },[products])


    const handleAddToCart = (product) => {

        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart=[...cart,product]
        } else {
            product.quantity = product.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);

            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }

  return (
    <div className="shop-container">
      <div className="product-container">
        {products &&
          products.map((product) => (
            <Product1
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            ></Product1>
          ))}
      </div>
          <div children="cart-container">
              <Cart1 cart={cart}>

              </Cart1>
      </div>
    </div>
  );
}

export default Shop1