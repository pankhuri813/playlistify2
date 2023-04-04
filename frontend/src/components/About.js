import "./About.css";

const About = () => {
  return (
    <div className="macbook-pro-14-2">
      <div className="navbar">
        <div className="about">{`About `}</div>
        <div className="about">Home</div>
        <div className="playlistiy">Playlistiy</div>
        <img className="love-icon" alt="" src="/love@2x.png" />
        <img className="user-icon" alt="" src="/user@2x.png" />
      </div>
      <div className="macbook-pro-14-2-child" />
      <div className="about1">{`About `}</div>
      <img
        className="macbook-pro-14-2-item"
        alt=""
        src="/rectangle-13@2x.png"
      />
      <div className="it-is-a-container">
        <p className="it-is-a">{`It is a long established `}</p>
        <p className="it-is-a">fact that a reader</p>
        <p className="it-is-a"> will be distracted by</p>
        <p className="it-is-a"> the readable content</p>
      </div>
    </div>
  );
};

export default About;
