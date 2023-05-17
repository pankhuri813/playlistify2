import Navbar from "../Navbar/Navbar";
import "./Category.css";

import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="categorypage">
      <Navbar />
      <div className="dance-categories">Dance - Categories</div>

      <Link to="/kathak">
         <img className="kathak-category-container" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684317706/kathak1_rys8uq.jpg" />
        {/* <p className="hover-text">Kathak</p> */}
      </Link>
      <Link to="/hiphop">
        
        <img
          className="hiphop-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684317705/hip_hop_loetio.jpg"
        />
      </Link>
      <Link to="/tap-dance">
       
        <img
          className="tapdance-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684317705/tap_dance_x51ton.jpg"
        />
      </Link>
      <Link to="/jazz">
       
        <img
          className="jazzdance-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684317705/jazzdance_xohvhp.jpg"
        />
      </Link>
      <Link to="/contemporary">
       
        <img
          className="contemporary-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684317705/contemporary_scntry.jpg"
        />
      </Link>
    </div>
  );
};

export default CategoryPage;
