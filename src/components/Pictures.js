import React from 'react'
import {
  Link, Route
} from 'react-router-dom'

import PictureList from '../data/pictures.js';
import Picture from './Picture.js';

const Pictures = ({ match }) => {
	let pictures = Object.keys(PictureList).map(function(key) {
			let title = PictureList[key].title;
			let medium = PictureList[key].medium;
			let color = PictureList[key].color;
			let types = PictureList[key].types;
			let image = PictureList[key].image;
			return(
				<li key={key} className='flex-item'>
				<Link to={`${match.url}/${types}/${color}/${medium}/${title}/${image}`}>
					<img src={`/img/${image}`} 
						 className='img-responsive center-block' 
						 alt={title} 
					/>
					<h4 className="name">{title}</h4>
				</Link>
			</li>
			)
		});

	return (
  <div id="gallery">
    <h2>Search by Title</h2>
    <input id="icon" className="search input-lg" placeholder="Search"/>
    <ul className="pagination"></ul>
    
    <ul className="list">
      {pictures}
    </ul>
	<Route path={`${match.url}/:types/:color/:medium/:title/:image`} component={Picture}/>
  </div>
  )
}


export default Pictures;
