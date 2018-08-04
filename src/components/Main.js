import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import Home from './Home.js'
import About from './About.js'
import Pictures from './Pictures.js'
import ErrorPage from './ErrorPage.js'

const Main = () => (
	<div className="main">
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/pictures" component={Pictures}/>
			<Route component={ErrorPage}/>
		</Switch>
	</div>
)


export default Main;
