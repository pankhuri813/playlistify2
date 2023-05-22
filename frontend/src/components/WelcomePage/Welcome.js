import "./Welcome.css";
import Typewriter from "typewriter-effect";
import LoginButton from "../Auth0/Login";


function Welcome() {
  return (
    <div className="welcome">
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"19em"}}>
      <div style={{display:"flex", flexDirection:"column"}}>
        <h1 className="Welcome-heading"> Playlistify </h1>
        <p style={{color:"#ECC6D3", maxWidth:"20em", fontWeight:"bold", fontSize:"1.25em", fontFamily:"'Ysabeau', sans-serif" }}>
          <Typewriter 
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: ["Hello There🙋🏻‍♀️","Welcome to the website which will help you find the most relevant videos for your interests and you can even organise your own personalised playlist of your choice here as well🥁"]
          }}
          />
        </p>
        <LoginButton />
      </div>
        
      <img style={{marginTop:"13em"}} src="/images/welcome.png" alt="" />
    </div>
    </div>
  );
}

export default Welcome;
