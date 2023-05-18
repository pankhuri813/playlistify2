import React, { useState, useEffect } from 'react';
import './Random.css'
import Navbar from '../Navbar/Navbar';

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=10&key=AIzaSyDVrPj052cWFmMOYMRoUiwJeFzArkgpwLE`
        );

        if (!response.ok) {
          throw new Error('Error fetching videos');
        }

        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.log('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div>
      <Navbar />
      <h1 className='random-heading'>Top 10 Most Viewed YouTube Videos</h1>
      <div className="video-list">   
        {videos.map((video) => (
          <div className="video-card" key={video.id} onClick={() => handleVideoClick(video.id)}>
            <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.channelTitle}</p>
            <div className="views-overlay">
              <span className="views">{video.statistics.viewCount}</span>
              <span className="views-label">Views</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
