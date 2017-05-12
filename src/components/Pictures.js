import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import Picture from './Picture.js'

const Pictures = ({ match }) => (
  <div>
    <h2>Pictures</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
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
