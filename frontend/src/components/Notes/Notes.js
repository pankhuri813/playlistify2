import React from "react";

import { MdDelete } from 'react-icons/md';
import {FaSave} from 'react-icons/fa';


import './Notes.css'

// let timer = 500,
//   timeout;
function Note(props) {
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
    hrs = hrs % 12 || 12; // Change this line to display 2-digit hour format
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    
    let day = date.getDate();
    const month = monthNames[date.getMonth()];
    
    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  }    

  // const debounce = (func) => {
  //   clearTimeout(timeout);
  //   timeout = setTimeout(func, timer);
  // };

  // const updateText = (text, id) => {
  //   debounce(() => props.updateText(text, id));
  // };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <FaSave  style={{marginLeft:"15em"}}/>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        // onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.noteTime)}</p>
       <MdDelete
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
        
      </div>
    </div>
  );
}

export default Note;