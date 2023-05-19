import React, { useState } from 'react'

import './Sidebar.css'
import {FaPlus} from 'react-icons/fa'

function SideBar(props) {
    const colors = ["#EEDBDB", "red", "brown", "black", "aqua"]
    const [listOpen, setListOpen] = useState(false);
  return (
    <div className='sidebar-container'>
         <FaPlus style={{  height:"40px ",width:'50px', cursor:"pointer"}} onClick={ () => setListOpen(!listOpen) }/>
         <ul className={`sidebar-list ${listOpen? " sidebar-list-active": ""}`}>
            {
                colors.map((items, index) =>
                 <li key={index}
                  className='sidebar-list-items' 
                  style={{backgroundColor:items}}
                  onClick={() => props.addNote(items)}
                  />)
            }
            
         </ul>
    
    
    </div>
  )
}

export default SideBar