import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import axios from 'axios'
import apiObject from '../../axios/api.js'

import BackdropElement from './backdrop-element';
import CreditsElement from './credits-element';
import CurtainElement from './curtain-element';
import PostContainerElement from './post-container-element';
import ProductionCompaniesElement from './production-companies-element';
import ProductionCountriesElement from './production-countries-element';
import ReleaseRatingElement from './release-rating-element';
import SimilarElement from './similar-element';
import WrapperObj from './wrapper-object'

import './movie-bio-component.css';

class MovieBioComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchResultsObject: null
    };
    
    this.makeLocationQuerySplit = this.makeLocationQuerySplit.bind(this)
    this.buildMovieBio = this.buildMovieBio.bind(this)
  }
  
  makeLocationQuerySplit(locQuery){
    let searchObj = {}
    if("URLSearchParams" in window && "entries" in URLSearchParams.prototype) {
      let urlParams = new URLSearchParams(locQuery).entries();
      for(let thisValuePair of urlParams) {
        searchObj[thisValuePair[0]] = thisValuePair[1];
      }
    } else {
      let locationQuerySplit = locQuery.split("?")[1].split("&");
      for (var i = 0; i < locationQuerySplit.length; i++) {
        let thisValuePair = locationQuerySplit[i].split("=");
        searchObj[thisValuePair[0]] = thisValuePair[1];
      }
    }
    return searchObj;
  }
  
  buildMovieBio(searchObj){        
    axios.get(apiObject.baseUrl + "movie/" + searchObj.qid, {
      params: {
        api_key: apiObject.apiKey,
        append_to_response: "credits,similar,release_dates"
      }
    }).then((apiResponseObject) => {
      if(apiResponseObject.status === 200 && apiResponseObject.statusText === "OK") {
        return apiResponseObject.data;
      }
      else {
        throw new Error("Something Went Wrong Somewhere");
      }
    }).then(({backdrop_path, title, genres, original_language, overview, production_countries, production_companies, credits: Cast, similar, release_dates}) => {
      const backdropPath = "https://image.tmdb.org/t/p/original" + backdrop_path;
      console.log("success");
      this.setState(($prevState, $nowProps) => {
        return{
          searchResultsObject: {
            backdropPath,
            postContainer: {
              title,
              overview,
              genres
            },
            productionCompaniesElement: {
              production_companies
            },
            productionCountriesElement: {
              production_countries
            },
            creditsElement:{
              Cast: Cast.cast             
            },
            similarElement:{
              similarListing: similar.results
            },
            releaseElement: {
              releaseObj: release_dates.results
            }
          }
        }
      })
    }).catch((errorResponse) => {
      console.log("FAIIIIL");
      console.log(errorResponse);
    })
  }
  
  render(){
    const {searchResultsObject} = this.state;
    return(
      <WrapperObj>
      {
      (searchResultsObject) ? 
      <div className="outer-border movie-bio">
        <div className="movie-jumbo position__relative">
          <CurtainElement />
          <BackdropElement bgImg={searchResultsObject.backdropPath} />
          <PostContainerElement {...searchResultsObject.postContainer}/>
        </div>
        <div className="prod position__relative">
          <Row className="show-grid">
            <Col xs={12} sm={6} className="blocks">
              <ProductionCompaniesElement {...searchResultsObject.productionCompaniesElement}/>
            </Col>
            <Col xs={12} sm={6} className="blocks">
              <ProductionCountriesElement {...searchResultsObject.productionCountriesElement} />
            </Col>
          </Row>
        </div>
        <CreditsElement {...searchResultsObject.creditsElement}/>
        <ReleaseRatingElement {..searchResultsObject.releaseElement}/>
        <SimilarElement {..searchResultsObject.similarElement} />
      </div>
      : null
      }
      </WrapperObj>
    )
  }
  
  componentDidMount(){
    let locationQuery = this.props.location.search,
        searchObject = this.makeLocationQuerySplit(locationQuery);
    this.buildMovieBio(searchObject);
  }
}

export default MovieBioComponent;