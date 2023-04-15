import "./About.css";
    import Navbar from "../Navbar and footer/Navbar";

const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <Navbar />
      
      <div className="aboutpage-child" />
      <div className="about1"> <b>About</b> </div>
      <img className="aboutpage-item" alt="" src="./Images/aboutImage.jpg" />
      <div className="it-is-a-about-container">
        <p className="it-is-a-about">It is a long established <br /> fact that a reader <br /> will be distracted by <br /> the readable content</p>
      </div>
    </div>
  );
};

export default Aboutpage;
