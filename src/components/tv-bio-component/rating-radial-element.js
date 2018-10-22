import React from 'react';
import { Row, Col } from 'react-bootstrap'
import WrapperObj from './wrapper-object.js'

const RatingRadialElement = ({voteAverage, SeasonsNum, EpisodesNum}) => {
  const circ = Math.PI * (60 * 2),
        rawPercent = (voteAverage / 10) * 100,
        pVal = ((100 - rawPercent) / 100) * circ,
        percent = {
          strokeDashoffset: pVal
        };
  
  return(
    <WrapperObj>
      <div className="rating-radial position__relative">
        <svg id="rating-svg" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" width="160" height="160">
          <circle id="greyCircle" r="70" cx="80" cy="80" strokeDasharray="565.48" strokeDashoffset="0" fill="transparent"></circle>
          <circle style={percent} id="fillCircle" r="60" cx="80" cy="80" strokeDasharray="565.48" strokeDashoffset="0" fill="transparent"></circle>
        </svg>
        <span className="rating-value">{rawPercent}%</span>
      </div>  
      <p className="rating-text text-center">Average Rating</p>
      <div className="episodes-seasons">
        <Row className="show-grid">
          <Col xs={6} sm={5} smOffset={1} className="segment text-center">
            <div className="borderbox-container">
              <span className="count">{SeasonsNum}</span>
            </div>
          </Col>
          <Col xs={6} sm={5} className="segment text-center">
            <div className="borderbox-container">
              <span className="count">{EpisodesNum}</span>
            </div>
          </Col>
        </Row>
      </div>
    </WrapperObj>
  )
}

export default RatingRadialElement;