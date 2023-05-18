import "./Homepage.css";
// import LogoutButton from "../Auth0/Logout";
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer"
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer'

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      
      <div className="homepage-child" />
      <div className="steps-1" />
      <div className="heading-homepage3">“Teaching in the Internet age </div>
      <img className="homepage-item" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683611424/madison-bracaglia-fcWAwPKpkTU-unsplash_vddgrz.jpg" />
      <img className="homepage-inner" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683611759/sergey-zolkin-_UeY8aTI6d0-unsplash_lc06eu.jpg" />
      
      
      <div className="homepage-child1" />
      <div className="heading-homepage">means we must teach</div>
      <div className="homepage-child2" />
      <div className="heading-homepage2">tomorrow's skills today"</div>
      
      <div className="types">
        <div className="browse-the-categories">Browse The Categories</div>
       <Link to ='/dance'> <img className="types-child" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683612225/Cupcakes_Conversation_with_Jesse_Scales_ballet_dancer___Ballet_News___Straight_from_the_stage_-_bringing_you_ballet_insights_gr9jvg.jpg" /> </Link>
        <Link to ='/cooking'> <img className="types-item" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683613460/Browned_Butter_Vanilla_Bean_Madeleines_-_The_Kitchen_McCabe_yvnb0e.jpg" /> </Link>
        <Link to ='/drawing'> <img className="types-inner" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683613487/Image_about_girl_in_Woman_by_Caglanur_on_We_Heart_It_q3oeoa.jpg" /> </Link>
        <div className="types-child1" />
        <div className="types-child2" />
        <div className="types-child3" />
        <div className="dance"></div>
        <div className="cooking">DRAWING</div>
        <div className="drawing">COOKING</div>
        <div className="dance-text">DANCE </div>
      </div>
        <div className="process-1"> <p className="textinside"> Login using your email and password. Feel free to use google authentication for an easier and non-troublesome experience.</p></div>
        <div className="circle-1"><p className="one"> 1 </p> </div>
         <div className="process-2"> <p className="textinside">Browse through our homepage and find what you want to learn and find resources that help you excel in your interests.</p></div>
         <div className="circle-2"> <p className="one"> 2 </p> </div>
         <div className="process-3"> <p className="textinside">Get the best playlist available on the internet and if that doesn'nt suit your taste, feel free to add your playlist to ensure both comfort and adaptability. </p></div>
         <div className="circle-3"> <p className="one"> 3  </p></div>
        
        <div className="footer" style={{backgroundColor:"#eee6e6", position:"absolute", bottom:"0", width:"100%", height:"10%"}}>
          <Footer/> 
          </div>
     
    </div>
  );
};

export default Homepage;
