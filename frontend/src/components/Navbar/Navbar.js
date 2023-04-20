import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Profile from '../Auth0/Profile'; // import the Profile component

function Navbar() {
  return (
    <div>
        <nav className="navbar-about">
           <Link to = "/homepage"> <div className="about">Home</div> </Link>
           <Link to = "/about"> <div className="about">About</div> </Link>
            <div className="playlistify">Playlistify</div>
          <Link to ="/favoritelist"> <img className="love-icon" alt="" src="/Images/hearticon.png" /> </Link> 
            <div className="user-profile">
              <Profile /> {/* add the Profile component here */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
