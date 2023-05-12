import React, { useState, useEffect } from "react";
import VideoFav from './VideoFav'
import { ToastContainer, toast } from 'react-toastify';
import PlaylistifySplash from "../WelcomePage/PlaylistifySplash";
import { useAuth0 } from "@auth0/auth0-react";
import 'react-toastify/dist/ReactToastify.css';


function FavoritesList() {
  // state variable 
  const {user, isAuthenticated} = useAuth0();
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
          
          arr.push({data,favoriteId});

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
//  console.log(videos[0].items[0].id)

  return (
    <>
    <p className="user-name"> {isAuthenticated && user.name}'s Playlists</p>
      {videos && videos.length === 0 ? (
        <div id="show-loader" className={`${loading ? 'show' : 'hide'}`}>
          <PlaylistifySplash />
        </div>
      ) : (
        <div className={`${loading ? 'hide' : 'show'}`}>
          
            
            { videos && videos.length > 0 && videos.map((e, i) => {
  return (
    <div key={i} className="video-iframe">
      <VideoFav favoriteId={e.favoriteId} />
      <button
        onClick={() => handleDelete(e.favoriteId)}
        className="delete-btn"
        >
        <img className="delete-img"src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683797956/transparent-delete-icon-email-icon-trash-icon-60240585ed03c6.0180224116129734459708-removebg-preview_lu4qae.png" alt=""/>
      </button>
      <ToastContainer />
    </div>
  );
}
)}

          
        </div>
      )}
    </>
  );
  
    }

export default FavoritesList
