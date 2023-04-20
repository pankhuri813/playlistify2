import "./Homepage.css";
import LogoutButton from "../Auth0/Logout";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      
      <div className="homepage-child" />
      <div className="steps-1" />
      <div className="heading-homepage3">“Teaching in the Internet age </div>
      <img className="homepage-item" alt="" src="./Images/background.jpg" />
      <img className="homepage-inner" alt="" src="./Images/laptop.jpg" />
      
      
      <div className="homepage-child1" />
      <div className="heading-homepage">means we must teach</div>
      <div className="homepage-child2" />
      <div className="heading-homepage2">tomorrow's skills today</div>
      
      <div className="types">
        <div className="browse-the-categories">Browse The Categories</div>
       <Link to ='/dance'> <img className="types-child" alt="" src="./Images/dance.jpeg" /> </Link>
        <Link to ='/cooking'> <img className="types-item" alt="" src="./Images/cooking.jpeg" /> </Link>
        <Link to ='/drawing'> <img className="types-inner" alt="" src="./Images/drawing.jpeg" /> </Link>
        <div className="types-child1" />
        <div className="types-child2" />
        <div className="types-child3" />
        <div className="dance"></div>
        <div className="cooking">DRAWING</div>
        <div className="drawing">COOKING</div>
        <div className="dance-text">DANCE </div>
      </div>
        <div className="process-1"></div>
        <div className="circle-1"><p className="one"> 1 </p> </div>
         <div className="process-2">
         </div>
         <div className="circle-2"></div>
         <div className="process-3"></div>
         <div className="circle-3"></div>
         <LogoutButton />
         
    </div>
  );
};

export default Homepage;
