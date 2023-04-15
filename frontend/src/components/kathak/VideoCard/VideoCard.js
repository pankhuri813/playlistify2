import React from "react";
import "./VideoCard.css";

export default function VideoCard(props) {
  const { title, thumbnail, channel } = props;
  return (
    <div className="video-card">
      <div
        className="video-img"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <div className="card-body">
        <h2 className="video-title">{title}</h2>
        <div className="channel-container">
          <img src="/icons/youtube.svg" alt="" className="yt-logo" />
          <p className="channel-name">{channel}</p>
        </div>
      </div>
    </div>
  );
}
