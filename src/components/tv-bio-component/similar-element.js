import React from 'react';
import { Col } from 'react-bootstrap';

const SimilarElement = ({poster_path, name}) => {
  return (
    <Col xs={6} sm={4} md={3} className="similar-container">
      <div className="borderbox-container">
        <div className="img-container position__relative">
          <img src={`https://image.tmdb.org/t/p/original` + poster_path}
          className="img-fluid mx-fluid" 
          alt={name} title={name}/>
          <p>{name}</p>
        </div>
      </div>
    </Col>
  )
}

export default SimilarElement;