import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import Picture from './Picture.js'
import PictureList from '../data/pictures.js';

const Pictures = ({ match }) => {
	
	const pictures = Object.keys(PictureList).map(function(key) {
			return<li key={key} className="flex-item">
				<Link to={PictureList[key].image} data-imagelightbox="a">
			<img src={PictureList[key].image} className="img-responsive center-block" alt={PictureList[key].title}/>
			<h4 className="name">{PictureList[key].title}</h4>
				</Link>
			</li>
		});

	return (
  <div id="gallery">
    <h2>Search by Title</h2>
    <input id="icon" className="search input-lg" placeholder="Search"/>
    <ul className="pagination"></ul>
    
    <ul className="list">
      {pictures}
    </ul>

    <Route path={`${match.url}/:pictureId`} component={Picture}/>
  </div>
  )
}

export default Pictures;
