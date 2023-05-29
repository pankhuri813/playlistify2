// NoteContainer.js

import React from "react";
import Note from "./Notes";


import "./NoteContainer.css";

function NoteContainer(props) {
  const notes = props.notes;

  return (
    <div className="note-container custom-scroll">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.noteId}
              note={item}
              deleteNote ={props.deleteNote}
            />
          ))
        ) : (
          <h3>No Notes present</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
