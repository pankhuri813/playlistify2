import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import {FaPencilAlt} from 'react-icons/fa'
import Profile from '../Auth0/Profile'; // import the Profile component

function Navbar() {
  const [totalItems, setTotalItems] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/favorites/${sessionStorage.getItem("sub")}`)
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data);
        setTotalItems(data.length);
        console.log(totalItems);
      })
      .catch((error) => console.log(error));
  }, [totalItems]);

  return (
    <div style={{  borderBottom: "2px dotted black"}}>
      <nav className="home-pick">
        <Link to="/homepage">
          <div className="about">Home</div>
        </Link>
        <Link to="/about">
          <div className="about">About</div>
        </Link>
        <Link to ='/blog'>
          <div className='blog-pick'>
            Blog
          </div>
        </Link>
        <Link to="/random">
          <div className='top-picks'>Top-Pick</div>
        </Link>
        <div className="playlistify">Playlistify</div>
        <Link to ="/notes">
          <div className='notes-pick'> 
          <FaPencilAlt /> 
          </div>
        </Link>
        <Link to="/favoritelist">
         <div className='wishlist'>
            {totalItems}
          </div>
          <img className="love-icon" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683790007/pokweurgf_wzd8c9.png" />
          {/* <span className='tooltiptext'>Favorites</span> */}
         
        </Link>
        <div className="user-profile">
          <Profile /> {/* add the Profile component here */}
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar;
