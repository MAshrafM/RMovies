import React from 'react';

const BackdropElement = ({bgImg}) => {
  return(
    <div className="backdrop" style={{backgroundImage: 'url(' + bgImg + ')'}}></div>
  ) 
}

export default BackdropElement;