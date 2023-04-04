import "./About.css";

const About = () => {
  return (
    <div className="about">
      <nav className="navbar">
        <div className="about-link">About</div>
        <div className="home-link">Home</div>
        <div className="playlistiy-link">Playlistiy</div>
        <img className="icon love-icon" alt="" src="./Images/hearticon.png" />
        <img className="icon user-icon" alt="" src="./Images/usericon.png" />
      </nav>
      <div className="about-content">
        <div className="about-heading">About
          <p className="about-text">It is a long established fact that a reader will be distracted by the readable content</p>
        </div>
        <div className="about-image">
          <img alt="" src="./Images/aboutImage.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
