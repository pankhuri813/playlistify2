import "./Homepage.css";
import Profile from "../Auth0/Profile";
import LogoutButton from "../Auth0/Logout";
import Navbar from "../Navbar and footer/Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      
      <div className="homepage-child" />
      <div className="steps-1" />
      <div className="heading-homepage3">It is a long established fact</div>
      <img className="homepage-item" alt="" src="./Images/background.jpg" />
      <img className="homepage-inner" alt="" src="./Images/laptop.jpg" />
      
      
      <div className="homepage-child1" />
      <div className="heading-homepage">It is a long established fact that a</div>
      <div className="homepage-child2" />
      <div className="heading-homepage2">It is long established</div>
      
      <div className="types">
        <div className="browse-the-categories">Browse The Categories</div>
       <Link to ='./dance'> <img className="types-child" alt="" src="./Images/dance.jpeg" /> </Link>
        <Link to ='./cooking'> <img className="types-item" alt="" src="./Images/cooking.jpeg" /> </Link>
        <Link to ='./drawing'> <img className="types-inner" alt="" src="./Images/drawing.jpeg" /> </Link>
        <div className="types-child1" />
        <div className="types-child2" />
        <div className="types-child3" />
        <div className="dance"></div>
        <div className="cooking">COOKING</div>
        <div className="drawing">DRAWING</div>
        <div className="dance-text">DANCE </div>
      </div>
        <div className="process-1"></div>
        <div className="circle-1"></div>
         <div className="process-2"> </div>
         <div className="circle-2"></div>
         <div className="process-3"></div>
         <div className="circle-3"></div>
         <LogoutButton />
         <Profile/>
    </div>
  );
};

export default Homepage;
