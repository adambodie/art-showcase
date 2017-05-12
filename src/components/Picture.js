import React from 'react'

const Picture = ({ match }) => (
  <div>
    <h3>{match.params.pictureId}</h3>
  </div>
)

export default Picture;
