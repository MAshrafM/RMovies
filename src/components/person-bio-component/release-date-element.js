import React from 'react';

const ReleaseDateElement = ({numValue}) => {
  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let d = new Date(String(numValue)),
      releasedValue = d.getDate() + " " + monthArray[d.getMonth()] + " " + d.getFullYear();
  
  return(
    <li className="release-date"><strong>{releasedValue}</strong></li>
  )
}

export default ReleaseDateElement;