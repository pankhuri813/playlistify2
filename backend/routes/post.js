const express = require("express")
const Favorite = require("../favorite.js")
// const User = require('../favorite.js'); 

const router = express.Router()


router.post('/add-user', async (req, res) => {
    const { userId,name } = req.body;

    try {
      // Check if the user already exists in the database
      const user  = await Favorite.findOne ({ userId });
      if (user) {
        res.status(200).json({ message: "user  already exists in favorites" });
      } else {
        // If the user does not exist, create a new document with the given userId
        const newUser = new Favorite({ userId,  name });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });



  router.put('/favorites', async (req, res) => {
    const { userId, playlistId } = req.body;
    try {
      const user = await Favorite.findOne({ userId });
      if (user) {
        // Check if the playlist already exists in the user's favorites
        if (user.favorite.includes(playlistId)) {
          res.status(200).json({ message: "Playlist already exists in favorites" });
        } else {
          // If the playlist does not exist, add it to the favorites array
          user.favorite.push(playlistId);
          const savedPlaylist = await user.save();
          res.status(200).json(savedPlaylist);
        }
      } else {
        res.status(402).json({ message: "User doesn't exist" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });
  
  
  router.get('/favorites/:userId', async (req, res) => {
    const { userId } = req.params;
  
    try {
      const userFavorites = await Favorite.findOne({ userId });
      // console.log(userFavorites)
      if (!userFavorites) {
        res.status(404).json({ message: "playlist not found" });
      } else {
        res.status(200).json(userFavorites.favorite);
      }
    }
    catch(error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
    });
    

    router.put('/favorites-delete', async (req, res) => {
      const { userId, playlistId } = req.body;
    
      try {
        const user = await Favorite.findOneAndUpdate(
          { userId },
          { $pull: { favorite: playlistId } },
          { new: true }
        );
    console.log(user)
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(402).json({ message: "User doesn't exist" });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
    });


    router.get('/popular-playlists', (req, res) => {
      User.aggregate([
        { $unwind: '$favorite' },
        {
          $group: {
            _id: '$favorite',
            count: { $sum: 1 }
          }
        },
        { $match: { count: { $gt: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ])
        .then(result => {
          // Map the playlist IDs from the result array
          const popularPlaylists = result.map(item => item._id);
          res.json(popularPlaylists);
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        });
    });
    
   
    
    module.exports = router;