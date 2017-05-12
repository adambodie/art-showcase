import React from 'react'
import {
  Route,
} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Pictures from './Pictures.js'

const Main = () => (
<div className="col-md-6" id="index">
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/pictures" component={Pictures}/>
</div>

)


export default Main;
