import "./Category.css";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="categorypage">
      <div className="dance-categories">Drawing- Categories</div>
      <div className="categorypage-child" />
      <div className="categorypage-item" />
      <div className="categorypage-inner" />
      <div className="rectangle-div" />
      <div className="categorypage-child1" />
      <Link to="/architecture">
        <img
          className="rectangle-icon"
          alt=""
          src="../Images/architecture.jpg"
        />{" "}
      </Link>
      <Link to="/caricature">
        {" "}
        <img
          className="categorypage-child2"
          alt=""
          src="../Images/caricature.jpeg"
        />{" "}
      </Link>
      <Link to="/cartoon">
        {" "}
        <img
          className="categorypage-child3"
          alt=""
          src="../Images/cartoon.jpeg"
        />{" "}
      </Link>
      <Link to="/potrait">
        {" "}
        <img
          className="categorypage-child4"
          alt=""
          src="../Images/potrait.jpeg"
        />{" "}
      </Link>
      <Link to="/acrylic">
        {" "}
        <img
          className="categorypage-child5"
          alt=""
          src="../Images/acrylic.jpg"
        />{" "}
      </Link>
    </div>
  );
};

export default CategoryPage;
