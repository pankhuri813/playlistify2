import React from 'react'
import Note from './Notes'
import './NoteContainer.css'
import Navbar from '../Navbar/Navbar'
import SideBar from './SideBar'

function NoteContainer() {
  return (
    
    <div className='note-container'>
        
        <Navbar />
       <div className='sidebar' > <SideBar />
        <h2>Notes</h2>
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