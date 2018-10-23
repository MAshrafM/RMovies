import React from 'react';
import { Col } from 'react-bootstrap';
import EpisodeCountElement from './episode-count-element'
import ReleaseDateElement from './release-date-element'
import ExpandIcon from '../../assets/icons/expand-icon.svg'

const CreditElement = ({imgUrl, mediaName, index, episodeCount, releaseDate}) => {
  return(
    <Col xs={6} sm={4} lg={3} className="credit-item">
      <div className="borderbox-container">
        <div className="img-container">
          <img src={imgUrl} className="img-fluid mx-auto" alt={mediaName} title={mediaName} />
        </div>
        <p className="movie-name">{mediaName}</p>
      </div>
      <ul className="list-unstyled meta-list">
      {
        !!episodeCount && <EpisodeCountElement numValue={episodeCount} />
      }
      {
        !!releaseDate && <ReleaseDateElement numValue={releaseDate} />
      }
      <li>
        <img src={ExpandIcon} className="img-fluid mx-auto expand-icon" alt="view" title="view" />
      </li>
      </ul>
    </Col>
  )
}

export default CreditElement;