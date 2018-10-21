import React from 'react';

const ImageUnitElement = ({posterPath, name}) => {
  return(
    <div className="img-container">
      <img src={posterPath} className="img-fluid mx-auto poster-img" alt={name} title={name} />
    </div>
  )
}

export default ImageUnitElement;