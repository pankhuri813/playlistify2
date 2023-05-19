 import React from 'react'
 import './Notes.css'

 
 function Notes(props) {
    

   return (
     <div className='note' style={{backgroundColor: props.note.color}}>
        <textarea className='note-text' defaultValue={props.note.text}/>
        <p>{props.note.time}</p>
     </div>
   )
 }
 
 export default Notes