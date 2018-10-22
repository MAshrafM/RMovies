import React from 'react';
import { Col } from 'react-bootstrap';

const CreditsElement = ({profile_path, name, character}) => {
  return (
    <Col xs={6} sm={4} md={3} className="credits-container">
      <div className="borderbox-container">
        <div className="img-container position__relative">
          <img src={`https://image.tmdb.org/t/p/original` + profile_path} className="img-fluid mx-auto" alt={name} title={name} />
        </div>
        <p className="actor-name text-center">{name}</p>
        <p className="char-name text-center">{character}</p>
      </div>
    </Col>
  )
}

export default CreditsElement;