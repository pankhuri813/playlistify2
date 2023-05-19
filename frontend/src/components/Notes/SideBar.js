import React from 'react'
import './Sidebar.css'
import {FaPlus} from 'react-icons/fa'

function SideBar(props) {
    const colors = ["EEDBDB", "red", "white"]
  return (
    <div className='sidebar-container'>
         <FaPlus style={{  width:'50px', cursor:"pointer"}}/>
         <ul className='sidebar-list'>
            {
                colors.map((items, index) =>
                 <li key={index}
                  className='sidebar-list-items' 
                  style={{backgroundColor:items}}/>)
            }
            
         </ul>
    
    
    </div>
  )
}

export default SideBar