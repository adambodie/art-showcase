import React from 'react'
import {
  Link
} from 'react-router-dom'

const Picture = props => {
return(
  <div className="overlay dialogStyle">
	<div className="dialogHeader">
		<Link to={'/pictures'}><button type="button"></button></Link>
	</div>
    <div className="dialog">
    	<div className="dialogImage">
			<img src={`/${props.image}`} alt={props.title}/>
		</div>
		<div className="dialogDescription">
			<h3>{props.title}</h3>
			<p>Type: {props.types}</p>
			<p>Color: {props.color}</p>
			<p>Medium: {props.medium}</p> 
			<p>{props.description}</p> 
		</div>
       
    </div>
  </div>
  )
}

export default Picture;
