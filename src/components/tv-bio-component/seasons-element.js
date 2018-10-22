import React from 'react';
import { Col } from 'react-bootstrap';

const SeasonsElement = ({poster_path, name, episode_count, airDateValue}) => {
  return(
    <Col xs={6} sm={4} md={3} className="season-segment">
      <div className="borderbox-container">
        <div className="img-container position__relative">
          <img src={`https://image.tmdb.org/t/p/original` + poster_path} className="img-fluid mx-auto" alt={name} title={name} />
          <p>{name}</p>
          <span className="episode-count hidden-xs tect-center">
            <span>{episode_count} Episodes</span>
          </span>
        </div>
        <div className="air-date">
          <p><span>Air Date: </span>{airDateValue}</p>
        </div>
      </div>
    </Col>
  )
}

export default SeasonsElement;