import React, { useState, useEffect } from "react";
import VideoCard from "../kathak/VideoCard/VideoCard";

function FavoritesList() {
  const [favorites, setFavorites] = useState([]);
  const [totalItems, setTotalItems] = useState(null);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/favorites/${sessionStorage.getItem("sub")}`)
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data);
        setTotalItems(data.length);
      })
      .catch((error) => console.error(error));
    let arr = [];
    for (let i = 0; i < favorites.length; i++) {
      let favoriteId = favorites[i];
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${favoriteId}&maxResults=1&key=AIzaSyCGuF9vosG65GuVpdlJxmxEpgCR1BgYdFw`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error.message);
            console.log(error);
          }
          arr.push(data);

          console.log(arr);
          if (arr.length === totalItems) {
            setVideos(arr);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [totalItems]);

  return (
    <>
      {videos &&
        videos.map((e, i) => {
          return (
            <>
              <VideoCard
                title={e.items[0].snippet.title}
                key={i}
                thumbnail={
                  e.items[0].snippet.thumbnails.high
                    ? e.items[0].snippet.thumbnails.high.url
                    : "/Images/img-not-found.png"
                }
                channel={e.items[0].snippet.channelTitle}
              />
            </>
          );
        })}
    </>
  );
}

export default FavoritesList;
