import "./Welcome.css";
import LoginButton from "../Auth0/Login";

function Welcome() {
  return (
    <div className="welcome">
      <div className="images" />
      <img className="welcome-image" src="./Images/welcomepageImage.jpg" alt="" />
      <img className="logo" src="./Images/logo.png" alt="" />
      <div className="buttons">
      
          {/* <div className="login">Login</div> */}
          <LoginButton></LoginButton>
        <div className="signup">SIGN-UP</div>
      </div>
      <p className="text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout
      </p>
    </div>
  );
}

export default Welcome;
