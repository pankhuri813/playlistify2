import "./About.css";
    import Navbar from "../Navbar and footer/Navbar";

const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <Navbar />
      {/* <nav className="navbar-about">
        <div className="about">About</div>
        <div className="about">Home</div>
        <div className="playlistify">Playlistify</div>
        <img className="love-icon" alt="" src="./Images/hearticon.png" />
        <img className="user-icon" alt="" src="./Images/usericon.png" />
      </nav> */}
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
