import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Header = () => (
  <div className="jumbotron">
  		<div className="row">
  			<div className="col-xs-4">
				<img src="img/logo.svg" alt="Logo" className="img-responsive" id="logo"/>
			</div>
			<div className="col-xs-8">
				<h1 className="header">Adam's Art Showcase</h1>
			</div>
		</div>
	</div>

)

const Home = () => (
<div className="col-md-6"  id="index">
	<div className="col-md-6">
		<p id="intro">Welcome to Adam's Art Showcase, a collection of art work I drew and painted back in High School from 2001-2002.  Enjoy a random drawing here or you can see everything on the Showcase page or read more about my thought process in the About section.  You can even search my artwork by name or filter based on categories.  Hope you all enjoy!</p>
	</div>
	<div className="col-md-6">
		<div id="feature"></div>
	</div>
</div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Picture = ({ match }) => (
  <div>
    <h3>{match.params.pictureId}</h3>
  </div>
)

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

const ArtShowcase = () => (
<div>
  <Header></Header>
  <Router>
	<div>
      <ul id="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/pictures">Pictures</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/pictures" component={Pictures}/>
      </div>
  </Router>
  </div>
)
export default ArtShowcase
