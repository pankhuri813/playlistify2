import React from 'react'
import Note from './Notes'
import './NoteContainer.css'
import Navbar from '../Navbar/Navbar'
import SideBar from './SideBar'

function NoteContainer() {
    const addNote = (color) => {
        
    }
  return (
    
    <div className='note-container'>
        
        <Navbar />
       <div className='sidebar' > <SideBar addNote= {addNote} />
        <h2 style={{marginBottom:"20px"}}>Notes</h2>
        <div className='note-container-notes custom-scroll'>
        <Note 
        note= {
            {
                text:"kjifef",
                time:"3213",
                color: "#EEDBDB"
            }
        } />
        <Note 
        note= {
            {
                text:"kjifef",
                time:"3213",
                color: "#EEDBDB"
            }
        } />
        <Note 
        note= {
            {
                text:"kjifef",
                time:"3213",
                color: "#EEDBDB"
            }
        } />
    </div>
    </div>
    </div>
    
  )
}

export default NoteContainer