import {useState, useEffect} from 'react';

import Navbar from '../Navbar/Navbar';
import NoteContainer from './NoteContainer';
import SideBar from './SideBar'


function NoteMain () {
    const [notes, setNotes] = useState (
        JSON.parse(localStorage.getItem("notes-app")) || []
    );
    const addNote = (color) => {
      const date = new Date();
     const asiaTime = date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

        const tempNotes = [...notes];
        tempNotes.push({
            id:Date.now() + "" + Math.floor(Math.random() * 78), 
            text: "",
            time: asiaTime,
            color,
        });
        setNotes(tempNotes);
    }
    const deleteNote = (id) => {
        const tempNotes = [...notes];
    
        const index = tempNotes.findIndex((item) => item.id === id);
        if (index < 0) return;
    
        tempNotes.splice(index, 1);
        setNotes(tempNotes);
      };
    
      const updateText = (text, id) => {
        const tempNotes = [...notes];
    
        const index = tempNotes.findIndex((item) => item.id === id);
        if (index < 0) return;
    
        tempNotes[index].text = text;
        setNotes(tempNotes);
      };
       
      useEffect(() => {
        localStorage.setItem("notes-app", JSON.stringify(notes));
      }, [notes]);
      
      return (
        <div >
            <Navbar />
        
        <div className='App'>
            
            <SideBar addNote ={addNote} />
            <NoteContainer 
            notes ={notes}
            deleteNote = {deleteNote}
            updateText = {updateText}
            />
            
        </div>
        </div>
      );
}

export default NoteMain