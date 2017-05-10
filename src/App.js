import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Header = () => (
  <div className="jumbotron">
  		<div className="header">
				<img src="./img/logo.svg" alt="Logo" className="logo"/>
				<h1 className="logo-header">Adam's Art Showcase</h1>
		</div>
	</div>

)
const Sidebar = () => (
<div className="col-md-3">
      <ul id="menu">
        <li className="top"><Link to="/">Home</Link></li>
        <li className="top"><Link to="/about">About</Link></li>
        <li className="top"><Link to="/pictures">Pictures</Link></li>
      </ul>
 </div>
)


const Home = () => (
<div>
	<div className="col-md-6">
		<p id="intro">Welcome to Adam's Art Showcase, a collection of art work I drew and painted back in High School from 2001-2002.  Enjoy a random drawing here or you can see everything on the Showcase page or read more about my thought process in the About section.  You can even search my artwork by name or filter based on categories.  Hope you all enjoy!</p>
	</div>
	<div className="col-md-6">
		<img src="img/adam.jpg" className="img-responsive" alt="Adam"/>
		<h3>Self Portrait #1</h3>
	</div>
</div>
)

const About = () => (
 <div className="col-md-6" id="index">
		<div className="about">
			<p>Growing up, I had an artistic side to me that I loved.  Even now, I still have that creative side, albeit in a different form.  My love of art peaked when I was in high school.  Needing a way to express myself, I chose to do so primarily by drawing and painting.  I loved to draw portraits mostly, but managed to find other things to draw.</p>
			<img src="img/teenager.jpg" alt="Adam" class="img-responsive" id="teenager"/>	
			<p>Most of my actual drawings and paintings are unfortunately gone.  I didn’t have much use of them at the time and they were taking space.  Especially the big life size nudes I drew attending a course at PNCA when I was 16 years old.  I figured at some point I would regret it, but then again, we all have regrets.  Now I've reached that point, as I discovered my Art Showcase I put together when I was 16.  I managed to save a few of my drawings and paintings from high school, complete with my thoughts at the time.</p>
			<img src="img/author.jpg" alt="Adam" class="img-responsive" id="author"/>
			<p>So here you have it, some of my artwork, in digital form for you to enjoy and reminisce.  Some of my favorites managed to get saved, like my Jimi Hendrix drawing or the well-traveled portrait of the great Bob Dylan.  Some of my drawings I completely forgot about, like my many self-portraits.  But a trip down memory lane is always fun, especially in art form.</p>
			<p>With all that said, I am still proud of everything I accomplished back then, even though I didn’t make a career out of it, as I once considered.  I have great memories of showcasing my artwork.  One time I cherish was when I showed my works to the artist in my family, my late cousin Channa Horwitz.  She was probably the most fascinating person in our family, creative and perhaps ahead of her time; her artwork has appeared in museums here and afar.  Though I didn’t see her too many times since she lived in L.A., I still cherish the brief connection we shared.  To this day, I still have the piece of art she gave me.  I also remember the art classes I took in high school at PNCA; among the things I remember was telling my parents that I was drawing people in the nude, and explaining to them the artistic significance of drawing people in the nude, flexing my skills with artistic factuality. That made me feel like an art nerd.</p>
		</div>
		<div className="initial">
		<p id="initial">Here were my initial thoughts from my art showcase back in 2001-2002.  As you can see, a lot has changed since then, among the notable changes was that I actually had hair when I was young.  Other than that, I'm still the same artistic person but with a different career path and improved maturity and personality.</p>
			<img src="img/initial-thoughts.jpg" alt="Initial thoughts" class="img-responsive" id="thoughts"/>
		</div>
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

const Footer = () => (
	<footer>
		<p className="block" id="year">Adam Bodie © 2017</p>
	</footer>
)

const Main = () => (
<div className="col-md-6" id="index">
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/pictures" component={Pictures}/>
</div>

)

const ArtShowcase = () => (
<div className="container-fluid">
  <Header/>
  <Router>
	<div className="row">
		<Sidebar />
		<Main />
      </div>
  </Router>
  <Footer/>
  </div>
)
export default ArtShowcase


