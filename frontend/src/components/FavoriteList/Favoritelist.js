import React, { useState, useEffect } from "react";
import VideoFav from './VideoFav'
import { ToastContainer, toast } from 'react-toastify';
import PlaylistifySplash from "../WelcomePage/PlaylistifySplash";
import { useAuth0 } from "@auth0/auth0-react";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Navbar/Navbar";


function FavoritesList() {
  // state variable 
  const {user, isAuthenticated} = useAuth0();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(null);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const [viewType, setViewType] = useState("list") //list or grid

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

  const handleViewTypeChange = (type) => {
    setViewType(type);
  }
//  console.log(videos[0].items[0].id)

  return (
    <>
    <Navbar />
    {/* <p className="user-name">{isAuthenticated && user.name}'s Playlists</p> */}
    <div className={`${loading ? 'show' : 'hide'}`} id="show-loader">
      <PlaylistifySplash />
    </div>
    <div className={`${loading ? 'hide' : 'show'}`}>
      <div className="view-toggle">
        <button className={`${viewType === 'list' ? 'active' : ''}`} onClick={() => handleViewTypeChange('list')}>
          <img className=" view-icon list-view"src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684341831/list-removebg-preview_pnjvr2.png" alt="" />
        </button>
        <button className={`${viewType === 'grid' ? 'active' : ''}`} onClick={() => handleViewTypeChange('grid')}>
        <img  className="view-icon grid-view"src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684341740/grid_ka2lzr.png" alt="" />
        </button>
      </div>
      {videos.length === 0 ? (
        <p>No playlists found.</p>
      ) : (
        <div className={`card-container ${viewType}`}>
          {videos.map((video, i) => (
            <div key={i} className="video-iframe">
              <VideoFav favoriteId={video.favoriteId} />
              <button onClick={() => handleDelete(video.favoriteId)} className="delete-btn">
                <img className="delete-img" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1683797956/transparent-delete-icon-email-icon-trash-icon-60240585ed03c6.0180224116129734459708-removebg-preview_lu4qae.png" alt="Delete" />
              </button>
              <ToastContainer />
            </div>
          ))}
        </div>
      )}
    </div>
    {/* <form>
      <div className="category-side"> Categories</div>
      <div className="form-control">
        <button>Kathak</button>
        <button>Tap-dance</button>
        <button>Hip-Hop</button>
        <button>Contemporary</button>
        <button>Jazz</button>
        <button>Non-veg</button>
        <button>Vegan</button>
        <button>South-Indian</button>
        <button>Chinese</button>
        <button>Thai</button>
        <button>Architecture</button>
        <button>Acrylic</button>
        <button>Caricature</button>
        <button>Cartoon</button>
        <button>Potrait</button>
      </div>
    </form> */}
  </>
  );
  
    }

export default FavoritesList
