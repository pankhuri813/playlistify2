const express = require("express")
const Favorite = require("../favorite.js")

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
    const { userId,playlistId } = req.body;
    try{
         // get user data 
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
    
    module.exports = router;