import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  user && console.log(user.sub);

  if (isLoading) {
    return <div>Loading ...</div>;
  } else {
    //setting user id into localstorage 
    localStorage.setItem("sub",user.sub)
    
    // creating document for new user if doesn't already exist
    fetch("/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.sub }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("POST response:", data);
      })
      .catch((error) => console.error(error));
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
