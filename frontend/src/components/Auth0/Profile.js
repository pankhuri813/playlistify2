import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  user && console.log(user.sub);

  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (user) {
    

    //setting user id into localstorage 
    sessionStorage.setItem("sub",user.sub) 

    // sends a POST request to create a new user document on the server's database.
    fetch("/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.sub }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("POST response:", data);
      })
      .catch((error) => console.log(error));
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;