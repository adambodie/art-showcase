import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

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


