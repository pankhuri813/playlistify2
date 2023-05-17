import Navbar from "../Navbar/Navbar";
import "./Category.css";

import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="categorypage">
      <Navbar />
      <div className="dance-categories"> Cooking - Categories</div>

      <Link to="/non-veg">
         <img className="kathak-category-container" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612642/non_veg_wsa5hx.jpg" />
        {/* <p className="hover-text">Kathak</p> */}
      </Link>
      <Link to="/thai">
        
        <img
          className="hiphop-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612675/thai_food_e2arnz.jpg"
        />
      </Link>
      <Link to="/south-indian">
       
        <img
          className="tapdance-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612487/South_indian_kybgoo.jpg"
        />
      </Link>
      <Link to="/chinese">
       
        <img
          className="jazzdance-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612534/chinese_rujrca.jpg"
        />
      </Link>
      <Link to="/vegan">
       
        <img
          className="contemporary-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612483/Vegan_ficlsg.jpg"
        />
      </Link>
    </div>
  );
};

export default CategoryPage;
