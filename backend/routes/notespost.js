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

// DELETE REQUEST FOR NOTES
router.delete('/notes/:userId', (req,res) => {
    const {userId} = req.params;
    const { _id} = req.body;
  console.log(_id)
    Notes.findOneAndUpdate(
      {userId},
      {$pull:{notes:{_id}}},
      {new: true}
    )
    .then((newArr) => {res.json({data: newArr.notes, message:'note deleted succesfully'})
  })
  .catch((error) => {
    console.log(error)
    res.status(500).json({error:"error deleting"}
  ) })
})


// PUT REQUEST FOR NOTES
router.put('/notes/:userId', (req, res) => {
  const {userId } = req.params;
  const { noteId, updatedText } = req.body;

  Notes.findOneAndUpdate(
    
      {
       userId,
       "notes._id" : noteId
      },
      {
        $set:  {
          "notes.$.text": updatedText
        }
      },
     {new: true}
  )
  .then((updatedNote) => res.json(updatedNote.notes))
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
