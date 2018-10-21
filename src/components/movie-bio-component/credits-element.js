import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CreditsElement = (props) => {
  return(
    <div className="credits position__relative">
      <div className="outer-container">
        <div className="block-heading">
          <header>
            <h3>Credits<br/><span>The People</span></h3>
          </header>
        </div>
        <Row className="show-grid">
          <Col xs={6} sm={4} md={3} className="credits-seg">
            <div className="borderbox-container">
              <div className="img-container position__relative">
                <img src="https://image.tmdb.org/t/p/original/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg" className="img-fluid mx-auto" alt="actor" title="actor"/>
              </div>
              <p className="actor-name text-center">Keanu Reeves</p>
              <p className="char-name text-center">Thomas Anderson / Neo</p>
            </div>
          </Col>
          <Col xs={6} sm={4} md={3} className="credits-seg">
            <div className="borderbox-container">
              <div className="img-container position__relative">
                <img src="https://image.tmdb.org/t/p/original/8suOhUmPbfKqDQ17jQ1Gy0mI3P4.jpg" className="img-fluid mx-auto" alt="actor" title="actor"/>
              </div>
              <p className="actor-name text-center">Laurence Fishburne</p>
              <p className="char-name text-center">Morpheus</p>
            </div>
          </Col>
          <Col xs={6} sm={4} md={3} className="credits-seg">
            <div className="borderbox-container">
              <div className="img-container position__relative">
                <img src="https://image.tmdb.org/t/p/original/6gk8GmlfjW8ONS19KMeISp8Cqxf.jpg" className="img-fluid mx-auto" alt="actor" title="actor"/>
              </div>
              <p className="actor-name text-center">Carrie-Anne Moss</p>
              <p className="char-name text-center">Trinity</p>
            </div>
          </Col>
          <Col xs={6} sm={4} md={3} className="credits-seg">
            <div className="borderbox-container">
              <div className="img-container position__relative">
                <img src="https://image.tmdb.org/t/p/original/ysED1kp94bpnweNVaDoVQQ6iy8X.jpg" className="img-fluid mx-auto" alt="actor" title="actor"/>
              </div>
              <p className="actor-name text-center">Hugo Weaving</p>
              <p className="char-name text-center">Agent Smith</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CreditsElement;