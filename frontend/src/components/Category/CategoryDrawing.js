import Navbar from "../Navbar/Navbar";
import "./Category.css";

import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="categorypage">
      <Navbar />
      <div className="dance-categories"> Drawing - Categories</div>

      <Link to="potrait">
         <img className="kathak-category-container" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612416/potrait_dypomn.jpg" />
        {/* <p className="hover-text">Kathak</p> */}
      </Link>
      <Link to="/architecture">
        
        <img
          className="hiphop-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612530/architecture_znqolb.jpg"
        />
      </Link>
      <Link to="/acrylic">
       
        <img
          className="tapdance-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612695/acrylic_lwdq5e.jpg"
        />
      </Link>
      <Link to="/cartoon">
       
        <img
          className="jazzdance-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612408/cartoon_odmb23.jpg"
        />
      </Link>
      <Link to="/caricature">
       
        <img
          className="contemporary-container"
          alt=""
          src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612393/caricature_nrepoo.jpg"
        />
      </Link>
    </div>
  );
};

export default CategoryPage;
