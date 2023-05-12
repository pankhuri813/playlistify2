import Navbar from "../Navbar/Navbar";
import "./Category.css";

import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="categorypage">
      <Navbar />
      <div className="dance-categories">Dance - Categories</div>

      <Link to="/kathak">
         <img className="kathak-category-container" alt="" src="../Images/kathak.jpeg" />
        {/* <p className="hover-text">Kathak</p> */}
      </Link>
      <Link to="/hiphop">
        
        <img
          className="hiphop-container"
          alt=""
          src="../Images/hiphop.jpg"
        />
      </Link>
      <Link to="/tap-dance">
       
        <img
          className="tapdance-container"
          alt=""
          src="../Images/tapdance.jpeg"
        />
      </Link>
      <Link to="/jazz">
       
        <img
          className="jazzdance-container"
          alt=""
          src="../Images/jazzdance.jpg"
        />
      </Link>
      <Link to="/contemporary">
       
        <img
          className="contemporary-container"
          alt=""
          src="../Images/contemporary.jpg"
        />
      </Link>
    </div>
  );
};

export default CategoryPage;
