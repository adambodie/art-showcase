import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import Picture from './Picture.js'

const Pictures = ({ match }) => (
  <div id="gallery">
    <h2>Search by Title</h2>
    <input id="icon" className="search input-lg" placeholder="Search"/>
    <ul className="flex-container">
      <li>
        <Link to={`${match.url}/alice-cooper`}>
                <img src="img/alice-cooper.jpg " className="img-responsive center-block" alt="Alice Cooper" />
            <h4 className="name">Alice Cooper</h4>
        </Link>
      </li>
      <li className="flex-item">
        <Link to={`${match.url}/apple`}>
                <img src="img/apple.jpg " className="img-responsive center-block" alt="Apple" />
            <h4 className="name">Apple</h4>
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/area-codes`}>
                <img src="img/ludacris.jpg " className="img-responsive center-block" alt="Area Codes"/>
            <h4 className="name">Area Codes</h4>
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:pictureId`} component={Picture}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a picture.</h3>
    )}/>
  </div>
)

export default Pictures;
