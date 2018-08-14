import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import Home from './Home.js'
import About from './About.js'
import PictureList from './PictureList.js'
import ErrorPage from './ErrorPage.js'

const Main = () => (
	<div className="main">
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/pictures"  render={() => <PictureList url={'https://s3-us-west-2.amazonaws.com/adamsartshowcase.bodiewebdesign.com/data.json'} perPage={12} />}/>
			<Route component={ErrorPage}/>
		</Switch>
	</div>
)


export default Main;
