import React from 'react';
import PictureList from '../data/pictures.js';

const Feature =() => {
	let random = Math.floor(Math.random() * PictureList.length);
	return (
	<div id="feature">
		<img src={PictureList[random].image} className="img-responsive" alt={PictureList[random].title}/>
		<h3>{PictureList[random].title}</h3>
	</div>
	)
	
}

export default Feature;
