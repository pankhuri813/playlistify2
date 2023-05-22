import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";

import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91", "#EEDBDB"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
     <FaPlus style={{marginLeft:"3.8em", height:"4em"}} onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
