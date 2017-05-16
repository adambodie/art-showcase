import React from 'react';
import PictureList from '../data/pictures.js';
import {
  Link
} from 'react-router-dom'

const Feature =() => {
	let random = Math.floor(Math.random() * PictureList.length);
	return (
	<div id="feature">
		<Link to={PictureList[random].image} data-imagelightbox="a">
			<img src={PictureList[random].image} className="img-responsive" alt={PictureList[random].title}/>
			<h3>{PictureList[random].title}</h3>
		</Link>
	</div>
	)
	
}

export default Feature;
