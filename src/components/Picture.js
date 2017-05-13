import React from 'react'

const Picture = (props) => (
  <div className="picture">
    <img src={props.image} className="img-responsive" alt={props.title}/>
    <div className="paragraph">
        <h3>{props.title}</h3>
		<p>Color: {props.color} </p>
		<p>Type: {props.types} </p>
		<p>Medium: {props.medium}</p>
		<p>Description: {props.description}</p>
    </div>
  </div>
)

export default Picture;
