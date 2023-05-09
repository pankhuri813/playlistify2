import "./About.css";
    import Navbar from "../Navbar/Navbar";

const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <Navbar />
      
      <div className="aboutpage-child" />
      <div className="about1"> <b>About</b> </div>
      <img className="aboutpage-item" alt="" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683613846/kelly-sikkema-pXmyDPziB8w-unsplash_e18mjs.jpg" />
      <div className="it-is-a-about-container">
        <p className="it-is-a-about">Playlistify provides a personalized and <br/>engaging learning experience that allows<br/> individuals to acquire new skills with ease, <br /> through a vast collection of  curated <br/>playlists from YouTube, tailored to their<br/> specific needs and preferencescd</p>
      </div>
    </div>
  );
};

export default Aboutpage;
