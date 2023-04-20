import "./Category.css";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="categorypage">
      
      <div className="dance-categories"> Cooking - Categories</div>
      <div className="categorypage-child" />
      <div className="categorypage-item" />
      <div className="categorypage-inner" />
      <div className="rectangle-div" />
      <div className="categorypage-child1" />
     <Link to= '/vegan'> <img className="rectangle-icon" alt="" src="../Images/Vegan.jpg" /> </Link>
     <Link to= '/thai'> <img className="categorypage-child2" alt="" src="../Images/thaifood.jpg" /> </Link>
     <Link to= '/non-veg'>  <img className="categorypage-child3" alt="" src="../Images/nonveg.jpg" /> </Link>
     <Link to= '/chinese'> <img className="categorypage-child4" alt="" src="../Images/chinese.jpeg"/> </Link>
     <Link to= '/south-indian'> <img className="categorypage-child5" alt="" src="../Images/south-indian.jpeg" /> </Link>
    </div>
  );
};

export default CategoryPage;