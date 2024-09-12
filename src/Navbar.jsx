import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from './CartContext';
import { useSearch } from './SearchContext';
import './Navbar.css';

const Navbar = () => {
  const navLinkStyle = { color: 'white' };
  const { getCartCount } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/" style={navLinkStyle}>Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/Fav" style={navLinkStyle}>Favourite</Link>
            </li>
           
          </ul>
        </div>
        <div className="d-flex align-items-center ms-auto">
          <div className="d-none d-lg-flex align-items-center me-3" >
            <Link className="nav-link d-flex align-items-center" to="/cart" style={navLinkStyle }>
              <i className="fa-solid fa-cart-shopping me-2"></i>
              <span>Cart</span>
              <span className="cart-count ms-2">{getCartCount()}</span>
            </Link>
          </div>
          <form className="d-none d-lg-flex search-form me-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search...."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      {/* For small screens */}
      <div className="d-block d-lg-none" style={{marginTop:'-50px', marginLeft:'87px'}}>
        <div className="d-flex justify-content-between align-items-center p-2" style={{marginLeft:'20px'}} >
          <Link className="nav-link d-flex align-items-center" to="/cart" style={navLinkStyle}>
            <i className="fa-solid fa-cart-shopping me-2"></i>
            <span>Cart</span>
            <span className="cart-count ms-2">{getCartCount()}</span>
          </Link>
          <form className="d-flex search-form">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search...."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
