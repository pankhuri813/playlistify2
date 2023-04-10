const express = require("express")
const Favorite = require("../favorite.js")

const router = express.Router()
router.post('/add-user', async (req, res) => {
    const { userId,name } = req.body;
  
    try {
      // Check if the user already exists in the database
      const playlist = await Favorite.findOne ({ userId });
      if (playlist) {
        res.status(200).json({ message: "Playlist already exists in favorites" });
      } else {
        // If the user does not exist, create a new document with the given userId
        const newPlaylist = new Favorite({ userId,  name });
        const savedPlaylist = await newPlaylist.save();
        res.status(200).json(savedPlaylist);
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

  router.put('/favorites', async (req, res) => {
    const { userId,playlistId } = req.body;
  
    try {
      // Check if the user already exists in the database
      const user = await Favorite.findOne({userId});
      console.log(user)
      if (user) {
        // If the user exists, update the favorites array
        const arr=user.favorite;
        arr.push(playlistId);
        user.favorite=arr;
        const savedPlaylist = await user.save();
        res.status(200).json(savedPlaylist);

      } else {
        res.status(402).json({ message: "User doesn't exists" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });
// router.post('/favorites', async (req, res) => {
//   const { userId,playlistId } = req.body;

//   try {
//     // Check if the playlist already exists in the database
//     const playlist = await Favorite.findOne ({playlistId });
//     if (playlist) {
//       res.status(200).json({ message: "Playlist already exists in favorites" });
//     } else {
//       // If the playlist does not exist, create a new document with the given playlistId
//       const newPlaylist = new Favorite({ userId,  playlistId });
//       console.log(playlistId)
//       const savedPlaylist = await newPlaylist.save();
//       res.status(200).json(savedPlaylist);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: error.message });
//   }
// });

router.get('/favorites/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const userFavorites = await Favorite.findOne({ userId });
    console.log(userFavorites)
    if (!userFavorites) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(userFavorites.favorite);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:userId/:favoriteId', async (req, res) => {
  const { userId, favoriteId } = req.params;

  try {
    const userFavorites = await Favorite.findOne({ userId });
    if (!userFavorites) {
      res.status(404).json({ message: "User not found" });
    } else {
      userFavorites.favorites.pull(favoriteId);
      const savedFavorite = await userFavorites.save();
      res.status(200).json(savedFavorite);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;




