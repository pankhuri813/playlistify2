import React from 'react';
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <nav className="navbar-about">
            <div className="about">Home</div>
            <div className="about">About</div>
            <div className="playlistify">Playlistify</div>
            <img className="love-icon" alt="" src="./Images/hearticon.png" />
            <img className="user-icon" alt="" src="./Images/usericon.png" />
        </nav>
    </div>
  )
}

export default Navbar