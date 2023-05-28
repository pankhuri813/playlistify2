import React, { useState } from 'react';
import './Playlist.css';
import Navbar from '../Navbar/Navbar'


const VideoCard = ({ title, thumbnail, channel }) => (
  <div className="video-card">
   
    <h2 className="video-title">{title}</h2>
    <div className="video-thumbnail">
      <img src={thumbnail} alt="Video Thumbnail" />
    </div>
    <p className="video-channel">{channel}</p>
  </div>
);

const VideoForm = ({ closeModal, setVideoData }) => {
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoId = extractVideoId(videoUrl);

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDVrPj052cWFmMOYMRoUiwJeFzArkgpwLE&part=snippet`
      );
      const data = await response.json();
      if (data.items.length === 0) {
        throw new Error('Video not found.');
      }
      setVideoData((prevVideoData) => [...prevVideoData, data.items[0].snippet]);
      setVideoUrl(''); // Reset the video URL input field
      closeModal(); // Close the modal after form submission
    } catch (error) {
      console.error(error);
    }
  };

  const extractVideoId = (url) => {
    const regex = /[?&]v=([^&#]*)/;
    const match = regex.exec(url);
    return match ? match[1] : null;
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
  
    <div className="modal" onClick={handleModalClick}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>
            YouTube Video URL:
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    
  );
};

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoData, setVideoData] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Navbar />
     
      <button onClick={openModal}> + </button>
      
      {modalOpen && (
        <div className="modal-container">
          <div className="modal-background" onClick={closeModal} />
          <VideoForm closeModal={closeModal} setVideoData={setVideoData} />
        </div>
      )}
      {videoData.length > 0 && (
        <div className="video-card-container">
          {videoData.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              thumbnail={
                video.thumbnails.high
                  ? video.thumbnails.high.url
                  : '/Images/img-not-found.png'
              }
              channel={video.channelTitle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
