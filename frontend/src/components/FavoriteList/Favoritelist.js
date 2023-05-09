import React, { useState, useEffect } from "react";
import VideoFav from './VideoFav'
import { ToastContainer, toast } from 'react-toastify';
import PlaylistifySplash from "../WelcomePage/PlaylistifySplash";
import 'react-toastify/dist/ReactToastify.css';

function FavoritesList() {
  // state variable 
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(null);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    },3000);

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('show-loader').style.display='none'   
    }, 3000);
  }, [])

  useEffect(() => {
    // get request to send to the server 
    fetch(`${process.env.REACT_APP_BACKEND_URL}/favorites/${sessionStorage.getItem("sub")}`)
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data);
        setTotalItems(data.length);
        console.log(totalItems)
      })
     
      .catch((error) => console.log(error));
    let arr = [];
    for (let i = 0; i < favorites.length; i++) {
      let favoriteId = favorites[i];
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${favoriteId}&maxResults=1&key=AIzaSyDVrPj052cWFmMOYMRoUiwJeFzArkgpwLE`
        
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
            setVideos(arr); //state variable defined earlier 
          }
        })
        .catch((error) => console.error(error));
    }
  }, [totalItems]);

const  handleDelete = async (videoId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/favorites-delete`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: sessionStorage.getItem("sub"),
          playlistId: videoId,
        }),
      });
      const data = await response.json();
      console.log(data);
      setFavorites(data.favorite);
      setTotalItems(data.favorite.length);
      toast.warn("Playlist deleted!")
    } catch (error) {
      console.error(error);
    }
  }
 

  return (
    <>
      {videos && videos.length === 0 ? (
        <div id="show-loader" className={`${loading ? 'show' : 'hide'}`}>
          <PlaylistifySplash />
        </div>
      ) : (
        <div className={`${loading ? 'hide' : 'show'}`}>
          {videos.map((e, i) => {
            return (
              <> 
                <VideoFav
                  title={e.items[0].snippet.title}
                  thumbnail={
                    e.items[0].snippet.thumbnails.high
                      ? e.items[0].snippet.thumbnails.high.url
                      : "/Images/img-not-found.png"
                  }
                  channel={e.items[0].snippet.channelTitle}
                  onDelete={() => handleDelete(favorites[i])}
                />
                <ToastContainer />
                </>
            );
          })}
        </div>
      )}
    </>
  );
  
    }

export default FavoritesList
