import React from "react";
import "./VideoCard.css";

export default function VideoCard(props) {
  const { title, thumbnail, channel} = props;

  return (
    <div className="display-video-card">
      <div
        className="video-image"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <div className="card-body-display">
        <h2 className="display-video-title">{title}</h2>
        <div className="channel-containers">
          <img src="/icons/youtube.svg" alt="" className="yt-logo" />
          <p className="channel-name">{channel}</p>
        </div>
        {/* <button className="delete-button" onClick={onDelete}>
          Delete
        </button> */}
      </div>
    </div>
  );
}


