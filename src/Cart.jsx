import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; 
const Cart = () => {
  const { cart, getTotalPrice,removeFromCart } = useCart();

  return (
    <div className="cart-container" style={{marginTop:'50px'}}>
     
      <div className="cart-grid">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              {item.images && item.images.length > 0 && (
                <img src={item.images[0]} alt={item.title} className="item-image" />
              )}
              <p>{item.title}</p>
              <p>Price: {item.price}$</p>
             
              <button style={{border:'1px solid white'}} onClick={() => removeFromCart(item.id)}>Trash<i class="fa-solid fa-trash"></i></button>
            </div>
          ))
        ) : (
          <div className="cart-item">No items in the cart.</div>
        )}
        
      </div>
      <h2>Total Price: {getTotalPrice()}$</h2>
    </div>
  );
};

export default Cart;

