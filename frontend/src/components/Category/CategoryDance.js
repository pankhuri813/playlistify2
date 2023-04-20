import Navbar from "../Navbar/Navbar";
import "./Category.css";

import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="categorypage">
      <Navbar />
      <div className="dance-categories">Dance - Categories</div>

      <Link to="/kathak">
        <img className="rectangle-icon" alt="" src="../Images/kathak.jpeg" />
        {/* <div className="overlay-text"> <p className="texttype"> kathak</p></div> */}
      </Link>
      <Link to="/hiphop">
        
        <img
          className="categorypage-child2"
          alt=""
          src="../Images/hiphop.jpg"
        />
      </Link>
      <Link to="/tap-dance">
       
        <img
          className="categorypage-child3"
          alt=""
          src="../Images/tapdance.jpeg"
        />
      </Link>
      <Link to="/jazz">
       
        <img
          className="categorypage-child4"
          alt=""
          src="../Images/jazzdance.jpg"
        />
      </Link>
      <Link to="/contemporary">
       
        <img
          className="categorypage-child5"
          alt=""
          src="../Images/contemporary.jpg"
        />
      </Link>
    </div>
  );
};

export default CategoryPage;
