import "./Category.css";
import { Link } from "react-router-dom";

const CategoryPage = (props) => {
  return (
    <div className="categorypage">
      
      <div className="dance-categories">{props.heading}</div>
      <div className="categorypage-child" />
      <div className="categorypage-item" />
      <div className="categorypage-inner" />
      <div className="rectangle-div" />
      <div className="categorypage-child1" />
     <Link to = {props.data[0].link} > <img className="rectangle-icon" alt="" src={props.data[0].img} /> </Link> 
      <img className="categorypage-child2" alt="" src={props.rec2} />
      <img className="categorypage-child3" alt="" src={props.rec3} />
      <img className="categorypage-child4" alt="" src={props.rec4} />
      <img className="categorypage-child5" alt="" src={props.rec5} />
    </div>
  );
};

export default CategoryPage;
