import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => (
	<div className="sidebar">
		<ul id="menu">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/pictures">Pictures</Link></li>
		</ul>
	 </div>
	)

export default Sidebar;
