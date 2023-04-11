import React, { useState, useEffect } from 'react';

function FavoritesList() {
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    fetch(`/favorites/${localStorage.getItem("sub")}`)
      .then(response => response.json())
      .then(data => {
        setFavorites(data);
        console.log(data)
      })
      .catch(error => console.error(error))
  }, []);

  function handleDeleteFavorite(favoriteId) {
    fetch(`/favorites/userId/${favoriteId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        // update the favorites state variable by removing the deleted favorite
        setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite !== favoriteId));
      })
      .catch(error => console.error(error))
  }

  function handleDeleteAllFavorites() {
    fetch('/favorites/userId', {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        // update the favorites state variable by removing all favorites
        setFavorites([]);
      })
      .catch(error => console.error(error))
  }

  favorites && console.log(favorites)

  return (
    <div>
      {favorites && favorites.map(favorite => (
        <div key={favorite}>
          {favorite}
          <button onClick={() => handleDeleteFavorite(favorite)}>Delete</button>
        </div>
      ))}
      <button onClick={() => handleDeleteAllFavorites()}>Delete All Favorites</button>
    </div>
  );
}

export default FavoritesList;