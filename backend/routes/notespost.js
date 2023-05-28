const express =require("express")
const Notes = require("../favorite")


const router = express.Router()

//POST REQUEST FOR ADDING NOTES
router.post('/notes/:userId', (req, res) => {
  const { userId } = req.params;
  const decodedUserId = decodeURIComponent(userId); // URL decode the userId
  const { noteId, noteTime, color, updatedText } = req.body;
  console.log(req.body)
  
  Notes.findOneAndUpdate(
    { userId: decodedUserId },
    { $push: { notes: { noteId, noteTime, color, updatedText } } },
    { new: true }
  )
 
    .then((note) => res.json(note))
    .catch((error) => res.status(400).json('Error: ' + error));
    
});


router.delete('/notes/:id', (req,res) => {
    const {id} = req.params;
     
    
    Notes.findByIdAndDelete(id)
    .then(() => {res.json({message:'note deleted succesfully'})
  })
  .catch((error) => res.status(500).json({error:"error deleting"}))
})



router.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { noteId, updatedText } = req.body;

  Notes.findById(id)
    .then((note) => {
      note.notes.forEach((noteObj) => {
        if (noteObj.noteId === noteId) {
          noteObj.updatedText = updatedText;
        }
      });

      note
        .save()
        .then((updatedNote) => res.json(updatedNote))
        .catch((error) => res.status(400).json('Error: ' + error));
    })
    .catch((error) => res.status(400).json('Error: ' + error));
});


// GET REQUEST FOR NOTES
router.get('/notes/:userId', (req, res) => { 
  Notes.findOne({ userId: req.params.userId})
    .then((userdata) => { 
    
      res.json(userdata.notes)
    })
    .catch((error) => res.status(400).json('Error: ' + error));
});


module.exports = router;
