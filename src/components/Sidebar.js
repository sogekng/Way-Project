import React from 'react';
import { SidebarData } from './SidebarData'

function Sidebar() {
  return( 
  <div className='sidebar'>
    <ul className='sidebarList'>
    {SidebarData.map((val, key) => {
      return (
      <li 
        key={key} 
        className='row'
        onClick={() => {
        window.location.pathname = val.link;
       }}
      >
        <div>{val.icon}</div> <div>{val.title}</div>
      </li>
      );
    })}
    </ul>
  </div>
);
}


export default Sidebar;