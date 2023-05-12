import React from "react";
import './VideoFav.css';

function VideoFav(props) {
  const { favoriteId } = props;
console.log(favoriteId)
  return (
    <div className="video-player-container">
      <iframe
        width="590"
        height="395"
        src={`https://www.youtube.com/embed/videoseries?list=${favoriteId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
    </div>
  );
}
export default VideoFav