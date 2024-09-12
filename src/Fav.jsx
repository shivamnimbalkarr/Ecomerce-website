import React from 'react';
import { useFavorites } from './FavoritesContext';
import './Fav.css'; 

const Fav = () => {
  const { favorites , removeFromFavorites, getTotalPrice} = useFavorites();

  return (
    <div>
      <h1>Favorites Page</h1>
      <div className="grid-containe">
        {favorites.length > 0 ? (
          favorites.map(item => (
            <div className="grid-ite" key={item.id}>
              {item.images && item.images.length > 0 && (
                <img src={item.images[0]} alt={item.title} className="item-img"/>
              )}
              <p className="item-titl">{item.title}</p>
              <p className="item-pric">Price: {item.price}$</p>
            
              <button style={{border:'1px solid white'}} onClick={() => removeFromFavorites(item.id)}>Trash<i class="fa-solid fa-trash"></i></button>
            </div>
          ))
        ) : (
          <div className="cart-items">No favorite products.</div>
        )}
      </div>
      <h2>Total Price: {getTotalPrice()}$</h2>
    </div>
  );
};

export default Fav;
