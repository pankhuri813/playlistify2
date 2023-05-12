import React, { useState, useEffect } from 'react';
import './Random.css'

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = 'AIzaSyDVrPj052cWFmMOYMRoUiwJeFzArkgpwLE';
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

    fetch(`${BASE_URL}videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=10&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const videos = data.items.map(video => ({
          id: video.id,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.high.url,
          views: video.statistics.viewCount
        }));

        setVideos(videos);
      })
      .catch(error => console.error(error));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const length = videos.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  return (
    <div>
      <h1>Most Viewed YouTube Videos</h1>
      {videos.length > 0 ? (
        <div className="carousel">
          <button className='prev-button' onClick={prevSlide}>Prev</button>
          <button className='next-button'onClick={nextSlide}>Next</button>
          <ul className="slider">
            {videos.map((video, index) => (
              <li
                key={video.id}
                className={index === currentIndex ? "slide active" : "slide"}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={video.thumbnail} alt={video.title} />
                  <h3>{video.title}</h3>
                </a>
                <p>Views: {video.views}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
}

export default App;
