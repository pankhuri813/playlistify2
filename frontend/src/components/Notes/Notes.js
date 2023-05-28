import React, { useState } from "react";
import { MdDelete } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';

import './Notes.css';

function Note(props) {
  const [textValue, setTextValue] = useState(props.note.text);

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const handleSaveClick = () => {
    const updatedNote = {
      ...props.note,
      text: textValue,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/notes/${props.note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ noteId: props.note.noteId, updatedNote }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Note updated:", data);
      })
      .catch((error) => {
        console.log("Error updating note:", error);
      });
  }

  const handleDeleteClick = () => {
    props.deleteNote( sessionStorage.getItem('sub'), props.note._id)
  
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <FaSave style={{ marginLeft: "15em" }} onClick={handleSaveClick} />
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => setTextValue(event.target.value)}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.noteTime)}</p>
        <MdDelete alt="DELETE" onClick={handleDeleteClick} />
      </div>
    </div>
  );
}

export default Note;
