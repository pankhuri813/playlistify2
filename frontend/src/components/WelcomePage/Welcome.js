import "./Welcome.css";
import LoginButton from "../Auth0/Login";

function Welcome() {
  return (
    <div className="welcome">
      <div className="images" />
      <img className="welcome-image" src="./Images/welcomepageImage.jpg" alt="" />
      <img className="logo" src="./Images/logo.png" alt="" />
      
          {/* <div className="login">Login</div> */}
          <LoginButton></LoginButton>
      
      <p className="text">
        Make your learning more fun and engaging using personalised playlists and top-tier recommended playlists, only on Playlistify!
      </p>
    </div>
  );
}

export default Welcome;
