import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CreditsElement = ({Cast}) => {
  return(
    <div className="credits position__relative">
      <div className="outer-container">
        <div className="block-heading">
          <header>
            <h3>Credits<br/><span>The People</span></h3>
          </header>
        </div>
        <Row className="show-grid">
        {
          Cast.slice(0, 4).map((actor, index) => {
            let profile = 'https://image.tmdb.org/t/p/original/' + actor.profile_path;
            return(
              <Col xs={6} sm={4} md={3} className="credits-seg" key={index}>
                <div className="borderbox-container">
                  <div className="img-container position__relative">
                    <img src={profile} className="img-fluid mx-auto" alt="actor" title="actor"/>
                  </div>
                  <p className="actor-name text-center">{actor.name}</p>
                  <p className="char-name text-center">{actor.character}</p>
                </div>
              </Col>
            )
          })
        }
        </Row>
      </div>
    </div>
  )
}

export default CreditsElement;