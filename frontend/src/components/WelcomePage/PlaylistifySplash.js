import React from "react";
import { Bars } from "react-loader-spinner";

function PlaylistifySplash() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "20%",
        width: "10%",
        marginLeft: "45%",
      }}
      className="loader"
    >
      <Bars
        height="80"
        width="80"
        color="#977288"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default PlaylistifySplash;
