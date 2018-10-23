import React from 'react';

const EpisodeCountElement = ({numValue}) => {
  return(
    <li className="episode-count"><strong>{numValue} {numValue < 2 ? "Episode" : "Episodes"}</strong></li>
  )
}

export default EpisodeCountElement;