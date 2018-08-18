import React from 'react'

const Picture = props => (
	<div className="overlay dialogStyle">
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


export default Picture;
