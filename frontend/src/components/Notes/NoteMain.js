// NoteMain.js

import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import NoteContainer from "./NoteContainer";
import Sidebar from "./SideBar";

function NoteMain() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/notes/${sessionStorage.getItem('sub')}`)
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.log("Error fetching notes:", error);
      });
  }, []);

  const addNote = (color) => {
    const date = new Date();
    const asiaTime = date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  
    const newNote = {
      noteId: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      noteTime: asiaTime,
      color,
    };
  
    const encodedUserId = encodeURIComponent(sessionStorage.getItem("sub")); // Encode the userId
  
    fetch(`${process.env.REACT_APP_BACKEND_URL}/notes/${encodedUserId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Note created:", data);
        setNotes([...notes, data]);
      })
      .catch((error) => {
        console.log("Error creating note:", error);
      });
  };
  
  
  

  const deleteNote = (id) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/notes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Note deleted:", data);
        const filteredNotes = notes.filter((note) => note.noteId !== id);
        setNotes(filteredNotes);
      })
      .catch((error) => {
        console.log("Error deleting note:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <Sidebar addNote={addNote} />
        <NoteContainer notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default NoteMain;
