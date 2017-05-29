import React from 'react'
import {
  Link
} from 'react-router-dom'

const Picture = ({match}) => {
return(
  <div className="overlay dialogStyle">
	<div className="dialogHeader">
		<h3>{match.params.title}</h3>
		<Link to={'/pictures'}><button type="button"></button></Link>
	</div>
    <div className="dialog">
    	<div className="dialogImage">
			<img src={`/img/${match.params.image}`} alt={match.params.title}/>
		</div>
		<div className="dialogDescription">
			<p>Type: {match.params.types}</p>
			<p>Color: {match.params.color}</p>
			<p>Medium: {match.params.medium}</p> 
			<p>{match.params.description}</p> 
		</div>
       
    </div>
  </div>
  )
}

export default Picture;
