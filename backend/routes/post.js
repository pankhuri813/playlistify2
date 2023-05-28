const express = require("express")
const Favorite = require("../favorite.js")
const User = require("../favorite.js"); 
const nodemailer = require('nodemailer');
const validator = require('validator');




const router = express.Router()

// Set up your email credentials and configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'pihu.srivastava717@gmail.com',
    pass: ''
  }
});
function isValidEmail(email) {
  return validator.isEmail(email);
}


// SAVE USER DETAILS IN DATABASE
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


 // ADDING PLAYLIST TO FAVORITE DATABASE
  router.put('/favorites', async (req, res) => {
    const { userId, playlistId } = req.body;
    console.log(req.body)
    try {
      const user = await Favorite.findOne({ userId });
      if (user) {
        // Check if the playlist already exists in the user's favorites
        if (user.favorite.includes(playlistId) ){
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
  
  router.put('/notes', async (req, res) => {
    const {  noteId, noteTime, updatedNote, color } = req.body;
    console.log(req.body)
    try {
      const user = await Favorite.findOne({ notes });
      if (user) {
        // Check if the playlist already exists in the user's favorites
        if (user.notes.includes(noteId, noteTime, updatedNote, color) ){
          res.status(200).json({ message: "Playlist already exists in favorites" });
        } else {
          // If the playlist does not exist, add it to the favorites array
          user.notes.push(noteId, noteTime, updatedNote, color);
          const savedNotes = await user.save();
          res.status(200).json(savedNotes);
        }
      } else {
        res.status(402).json({ message: "User doesn't exist" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });
  //GETTING SAVED PLAYLIST FROM DATABASE ON FAVORITELIST PAGE
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
    
    // DELETE THE PLAYLIST FROM FAVORITES
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


   
      
    // router.put('/save-notes/:id', async (req, res) => {
    //   const {  noteId, noteTime, updatedNote, color } = req.body;
    //   console.log(req.body);
    
    //   try {
    //     const user = await Favorite.findOne({ _id:req.params.id });
    //     console.log(user)
    //     const arr = user.notes || [ ];
    //     arr.push({ noteId, noteTime, color, updatedText: updatedNote });
    //     console.log(arr);
    //     user.notes= arr;
    //     const savedUser = await user.save();
    //     if(savedUser) {
    //       res.status(201).json({message : "sucess"})
    //     }
    //     else{
    //       res.status(500).json({error : "try agains"})
    //     }
    //     // if (!user) {
    //     //   return res.status(404).json({ message: "User not found" });
    //     // }
    
    //     // user.notes.push({ noteId, noteTime, color, updatedText: updatedNote });
    //     // // const savedUser = await user.save();
    //     // res.status(200).json(savedUser);
    //   } catch (e) {
    //     console.log(e);
    //     // res.status(500).json({ message: "Internal Server Error" });
    //   }
    // });

    
    
    // router.put('/save-notes', async (req, res) => {
    //   const { noteId, noteTime, updatedNote, color } = req.body;
    //   console.log(req.body)
    
    //   try {
    //     const user = await Favorite.findOne({ userId });
    //     if (!user) {
    //       return res.status(404).json({ error: 'User not found' });
    //     }
    
    //     const arr = user.notes || [];
    //     arr.push({ noteId:noteId, noteTime:noteTime, color:color, updatedText: updatedNote });
    
    //     user.notes = arr;
    //     const savedUser = await user.save();
    
    //     if (savedUser) {
    //       return res.status(201).json({ message: 'Success' });
    //     } else {
    //       return res.status(500).json({ error: 'Failed to save notes' });
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     return res.status(500).json({ error: 'Internal server error' });
    //   }
    // });
    
    

    router.post('/Update-email',(req, res) => {
      const { email } = req.body;
      console.log(req.body)
    
      // Validate the email address (you can use a library like validator.js)
      if (!isValidEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
    
      // Compose the welcome email
      const mailOptions = {
        from: 'pankhuri.srivastava@kalvium.community',
        to: {email},
        subject: 'Welcome to My Site',
        text: 'Thank you for signing up. Welcome to our site!'
      };
    
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ message: 'Failed to send welcome email' });
        }
    
        console.log('Welcome email sent:', info.response);
        res.status(200).json({ message: 'Welcome email sent successfully' });
      });
    });
  
    
    module.exports = router;