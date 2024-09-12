

import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    
    return favorites.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, getTotalPrice }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
