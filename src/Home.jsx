// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Home.css';
// import { useCart } from './CartContext';
// import { useFavorites } from './FavoritesContext';
// import { useSearch } from './SearchContext';
// import Slider from 'react-slider';

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [cartMessageId, setCartMessageId] = useState(null);
//   const [favoriteMessageId, setFavoriteMessageId] = useState(null);
//   const { addToCart } = useCart();
//   const { addToFavorites, favorites } = useFavorites();
//   const { searchQuery } = useSearch();

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://dummyjson.com/products');
//       setData(response.data.products);
//       const uniqueCategories = Array.from(new Set(response.data.products.map(item => item.category)));
//       setCategories(['All', ...uniqueCategories]);

//       const uniqueBrands = Array.from(new Set(response.data.products.map(item => item.brand)));
//       setBrands(['All', ...uniqueBrands]);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleAddToCart = (item) => {
//     addToCart(item);
//     setCartMessageId(item.id);
//     setTimeout(() => setCartMessageId(null), 1000);
//   };

//   const handleFavoriteClick = (item) => {
//     addToFavorites(item);
//     setFavoriteMessageId(item.id);
//     setTimeout(() => setFavoriteMessageId(null), 1000);
//   };

//   const handleBrandChange = (brand) => {
//     setSelectedBrands(prevSelectedBrands => 
//       prevSelectedBrands.includes(brand)
//         ? prevSelectedBrands.filter(b => b !== brand)
//         : [...prevSelectedBrands, brand]
//     );
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   const filteredData = data
//     .filter(item =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .filter(item =>
//       selectedCategory === 'All' || item.category === selectedCategory
//     )
//     .filter(item =>
//       selectedBrands.length === 0 || selectedBrands.includes(item.brand)
//     )
//     .filter(item =>
//       item.price >= priceRange[0] && item.price <= priceRange[1]
//     );

//   return (
    
//     <div className="home-container">
      
//       <div className="sidebar">
//         <div className="filters">
//         <div className="category-filter">
//             <h3>Categories</h3>
//             {categories.map(category => (
//               <button
//                 key={category}
//                 className={selectedCategory === category ? 'active' : ''}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           <div className="brand-filter">
//             <h3>Brands</h3>
//             {brands.map(brand => (
//               <div key={brand} className="brand-checkbox">
//                 <input
//                   type="checkbox"
//                   id={brand}
//                   checked={selectedBrands.includes(brand)}
//                   onChange={() => handleBrandChange(brand)}
//                 />
//                 <label htmlFor={brand}>{brand}</label>
//               </div>
//             ))}
//           </div>

//           <div className="price-filter">
//             <h3>Price Range</h3>
//             <div className="range-container">
//               <Slider
//                 min={0}
//                 max={1000}
//                 className="slider"
//                 value={priceRange}
//                 onChange={setPriceRange}
//                 ariaLabel={['Minimum price', 'Maximum price']}
//                 renderTrack={(props, state) => <div {...props} className="track" />}
//                 renderThumb={(props, state) => <div {...props} className="thumb" />}
//               />
//               <div className="price-label">Price: {priceRange[0]}$ - {priceRange[1]}$</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="category-filter">
//             <h3>Categories</h3>
//             {categories.map(category => (
//               <button
//                 key={category}
//                 className={selectedCategory === category ? 'active' : ''}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div> */}
//       <div className="main-content">
//         <div className="grid-container">
//           {filteredData.length > 0 ? (
//             filteredData.map(item => (
//               <div className="grid-item" key={item.id}>
//                 <i
//                   className={`fa-regular fa-heart ${favorites.some(fav => fav.id === item.id) ? 'active' : ''} btno`}
//                   onClick={() => handleFavoriteClick(item)}
//                 ></i>
//                 {favoriteMessageId === item.id && (
//                   <div className="cart-message">Added to Favorites!</div>
//                 )}
//                 {item.images && item.images.length > 0 && (
//                   <img src={item.images[0]} alt={item.title} className="item-image" />
//                 )}
//                 <p className="item-title">{item.title}</p>
//                 <p>Price: {item.price}$</p>
//                 {cartMessageId === item.id && (
//                   <div className="cart-message">Added to cart!</div>
//                 )}
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={() => handleAddToCart(item)}
//                 >
//                   <i className="fa-solid fa-cart-shopping"></i><span> Add to Cart</span>
//                 </button>
//               </div>
//             ))
//           ) : (
//             <div>No products available.</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure this is imported
import './Home.css';
import { useCart } from './CartContext';
import { useFavorites } from './FavoritesContext';
import { useSearch } from './SearchContext';
import Slider from 'react-slider';

const Home = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [cartMessageId, setCartMessageId] = useState(null);
  const [favoriteMessageId, setFavoriteMessageId] = useState(null);
  const { addToCart } = useCart();
  const { addToFavorites, favorites } = useFavorites();
  const { searchQuery } = useSearch();
  const navigate = useNavigate(); // Use the navigate function

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setData(response.data.products);
      const uniqueCategories = Array.from(new Set(response.data.products.map(item => item.category)));
      setCategories(['All', ...uniqueCategories]);

      const uniqueBrands = Array.from(new Set(response.data.products.map(item => item.brand)));
      setBrands(['All', ...uniqueBrands]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setCartMessageId(item.id);
    setTimeout(() => setCartMessageId(null), 1000);
  };

  const handleFavoriteClick = (item) => {
    addToFavorites(item);
    setFavoriteMessageId(item.id);
    setTimeout(() => setFavoriteMessageId(null), 1000);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prevSelectedBrands => 
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter(b => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleLoadMore = () => {
    navigate('/all-products'); // Navigate to the AllProducts page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredData = data
    .filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(item =>
      selectedCategory === 'All' || item.category === selectedCategory
    )
    .filter(item =>
      selectedBrands.length === 0 || selectedBrands.includes(item.brand)
    )
    .filter(item =>
      item.price >= priceRange[0] && item.price <= priceRange[1]
    );

  const displayedProducts = filteredData.slice(0, 6);

  return (
    
    <div className="home-container">
      <div className="sidebar">
        <div className="filters">
         

          <div className="brand-filter">
            <h3>Brands</h3>
            {brands.map(brand => (
              <div key={brand} className="brand-checkbox">
                <input
                  type="checkbox"
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>

          <div className="price-filter">
            <h3>Price Range</h3>
            <div className="range-container">
              <Slider
                min={0}
                max={1000}
                className="slider"
                value={priceRange}
                onChange={setPriceRange}
                ariaLabel={['Minimum price', 'Maximum price']}
                renderTrack={(props, state) => <div {...props} className="track" />}
                renderThumb={(props, state) => <div {...props} className="thumb" />}
              />
              <div className="price-label">Price: {priceRange[0]}$ - {priceRange[1]}$</div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
      <div className="category-filter">
            
            {categories.map(category => (
              <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

        <div className="grid-container">
          {displayedProducts.length > 0 ? (
            displayedProducts.map(item => (
              <div className="grid-item" key={item.id}>
                <i
                  className={`fa-regular fa-heart ${favorites.some(fav => fav.id === item.id) ? 'active' : ''} btno`}
                  onClick={() => handleFavoriteClick(item)}
                ></i>
                {favoriteMessageId === item.id && (
                  <div className="cart-message">Added to Favorites!</div>
                )}
                {item.images && item.images.length > 0 && (
                  <img src={item.images[0]} alt={item.title} className="item-image" />
                )}
                <p className="item-title">{item.title}</p>
                <p>Price: {item.price}$</p>
                {cartMessageId === item.id && (
                  <div className="cart-message">Added to cart!</div>
                )}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleAddToCart(item)}
                >
                  <i className="fa-solid fa-cart-shopping"></i><span> Add to Cart</span>
                </button>
              </div>
            ))
          ) : (
            <div>No products available.</div>
          )}
        </div>
        {filteredData.length > 6 && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
