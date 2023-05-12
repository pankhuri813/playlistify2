import React, { useEffect, useState } from 'react';

function PopularPlaylists() {
  const [popularPlaylists, setPopularPlaylists] = useState([]);

  useEffect(() => {
    // Make an AJAX request to the server to get the popular playlists
    fetch('/popular-playlists')
      .then(response => response.json())
      .then(data => {
        // Set the popular playlists state if the response is successful
        if (data.length > 0) {
          setPopularPlaylists(data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Popular Playlists</h1>
      {popularPlaylists.length > 0 ? (
        <ul>
          {popularPlaylists.map(playlist => (
            <li key={playlist}>{playlist}</li>
          ))}
        </ul>
      ) : (
        <p>No playlists have been favorited by any users</p>
      )}
    </div>
  );
}

export default PopularPlaylists;
