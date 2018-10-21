import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import BackdropElement from './backdrop-element';
import CreditsElement from './credits-element';
import CurtainElement from './curtain-element';
import PostContainerElement from './post-container-element';
import ProductionCompaniesElement from './production-companies-element';
import ProductionCountriesElement from './production-countries-element';
import ReleaseRatingElement from './release-rating-element';

import './movie-bio-component.css';

class MovieBioComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      releaseType: ["Premiere", "Theatrical (Limited)", "Theatrical", "Digital", "Physical", "TV"]
    };
  }
  
  render(){
    let bgImg = "https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg";
    return(
      <div className="outer-border movie-bio">
        <div className="movie-jumbo position__relative">
          <CurtainElement />
          <BackdropElement bgImg={bgImg} />
          <PostContainerElement />
        </div>
        <div className="prod position__relative">
          <Row className="show-grid">
            <Col xs={12} sm={6} className="blocks">
              <ProductionCompaniesElement />
            </Col>
            <Col xs={12} sm={6} className="blocks">
              <ProductionCountriesElement />
            </Col>
          </Row>
        </div>
        <CreditsElement />
        <ReleaseRatingElement />
      </div>
    )
  }
}

export default MovieBioComponent;