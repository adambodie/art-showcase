import React from 'react'

const Picture = (props) => (
  <div className="picture">
    <img src={props.image} className="img-responsive" alt={props.title}/>
    <div className="paragraph">
        <h3>{props.title}</h3>
    </div>
  </div>
)

export default Picture;
