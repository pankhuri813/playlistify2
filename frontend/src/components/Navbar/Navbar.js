import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import Profile from '../Auth0/Profile'; // import the Profile component

function Navbar() {

  const [totalItems, setTotalItems] = useState(null);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    // get request to send to the server 
    fetch(`${process.env.REACT_APP_BACKEND_URL}/favorites/${sessionStorage.getItem("sub")}`)
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data);
        setTotalItems(data.length);
        console.log(totalItems)
      })
     
      .catch((error) => console.log(error));
    }
  )
   return (
    <div>
      
        <nav className="navbar-about">
           <Link to = "/homepage"> <div className="about">Home</div> </Link>
           <Link to = "/about"> <div className="about">About</div> </Link>
            <div className="playlistify">Playlistify</div>
          <Link to ="/favoritelist"><div>{totalItems}</div> <img className="love-icon" alt="" src="/Images/hearticon.png" /> </Link> 
            <div className="user-profile">
              <Profile /> {/* add the Profile component here */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
