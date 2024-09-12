
import React from 'react';
import Navbar from './Navbar';
import './App.css'; 
import { CartProvider } from './CartContext';
import { FavoritesProvider } from './FavoritesContext';
import Home from './Home';
import Fav from './Fav';
import Cart from './Cart';
import AllProducts from './AllProducts';
import { SearchProvider } from './SearchContext';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <div className="App" >
     <SearchProvider>
    <FavoritesProvider>
    <CartProvider>
      <Router>
      <Navbar />
     
      
      <Routes>
      
        
        <Route path="/" element={<Home/>} />
        <Route path="/Fav" element={<Fav/>} />
       
        <Route path="/cart" element={<Cart/>} />
        <Route path="/all-products" element={<AllProducts />} />
      
      </Routes>
      
    </Router>
    </CartProvider>
    </FavoritesProvider>
    </SearchProvider>
    </div>
    
    
  );
}

export default App;