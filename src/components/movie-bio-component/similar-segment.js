import React from 'react'
import { Col } from 'react-bootstrap'

const SimilarSegment = ({poster_path, title}) => {
  return (
    <Col xs={6} sm={4} md={3} className="credit-egment">
      <div className="borderbox-container">
        <div className="img-container position__relative">
          <img src={`https://image.tmdb.org/t/p/original` + poster_path} className="img-fluid mx-auto" alt={title} title={title}/>
          <p className="movie-name text-center">{title}</p>
        </div>
      </div>
    </Col>
  )
}

export default SimilarSegment;