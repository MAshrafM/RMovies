import React from 'react'
import { Col } from 'react-bootstrap'
import ExpandIcon from '../../assets/icons/expand-icon.svg';

const MovieListingElement = ({imgUrl, movieName, rating, releaseDate}) => {
  return(
    <Col xs={12} sm={4} lg={3} className="movie-listing">
      <div className="borderbox-container">
        <div className="img-container position__relative">
          <img src={imgUrl} className="img-fluid mx-auto" alt={movieName} title={movieName} />
          <div className="name-container">
            <p>{movieName}</p>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <ul className="list-unstyled meta-list row">
          <li className="release-date"><strong>Release Date:</strong> {releaseDate}</li>
          <li className="view-details">
            <img src={ExpandIcon} className="img-fluid mx-auto" alt="view" title="view" />
          </li>
        </ul>
      </div>
    </Col>
  )
}

export default MovieListingElement;