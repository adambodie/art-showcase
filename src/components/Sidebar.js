import React from 'react'
import {
  Link
} from 'react-router-dom'

const Sidebar = () => (
<div className="col-md-3">
      <ul id="menu">
        <li className="top"><Link to="/">Home</Link></li>
        <li className="top"><Link to="/about">About</Link></li>
        <li className="top"><Link to="/pictures">Pictures</Link></li>
      </ul>
 </div>
)

export default Sidebar;
