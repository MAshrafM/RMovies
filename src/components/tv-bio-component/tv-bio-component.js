import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import apiObject from '../../axios/api.js'

import BackdropElement from './backdrop-element'
import CreditsListingElement from './credits-listing-element'
import CurtainElement from './curtain-element'
import ImageUnitElement from './image-unit-element'
import PostContainerElement from './post-container-element'
import RatingRadialElement from './rating-radial-element'
import SeasonsListingElement from './seasons-listing-element'
import SimilarShowElement from './similar-show-element'
import WrapperObj from './wrapper-object'

class TvBioComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      languageCodes: null,
      searchResultsObj: {}
    }
    
    this.makeLocationQuerySplit = this.makeLocationQuerySplit.bind(this)
    this.buildTvBio = this.buildTvBio.bind(this)
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
  
  buildTvBio(searchObj){
    const tvShowName = searchObj.qt.split("-").join(" "),
          tvShowId = searchObj.qid;
    let languageCodesResponse = [{"code": "en","name": "English"}];
    
    axios.get("https://sricharankrishnan.github.io/iso-group-code-files/iso_639-1-language.json")
    .then((apiResponseObject) => {
      if(apiResponseObject.status === 200) {
        return apiResponseObject.data;
      }
      else {
        throw new Error("Something Went Wrong - API Call for Language Codes");
      }
    })
    .then((successResponse) => {
      languageCodesResponse = successResponse;
    })
    .catch((errorResponse) => {
      console.log(errorResponse);
    });
    
    axios.get(apiObject.baseUrl + "tv/" + searchObj.qid, {
      params: {
        api_key: apiObject.apiKey,
        append_to_response: "credits,similar"
      }
    }).then((apiResponseObject) => {
      if(apiResponseObject.status === 200 && apiResponseObject.statusText === "OK") {
        const checkNameAgainst = apiResponseObject.data.name.toLowerCase(),
              checkIdAgainst = String(apiResponseObject.data.id);
        if(checkNameAgainst === tvShowName && checkIdAgainst === tvShowId) {
          return apiResponseObject.data;
        }
        else {
          throw new Error("Something Went Wrong Somewhere");
        }
      }
    }).then(({backdrop_path, poster_path, name, genres, languages, overview, first_air_date, created_by: createdBy,           vote_average: voteAverage, number_of_episodes: EpisodesNum, number_of_seasons: SeasonsNum, seasons, credits, similar}) => {
      const backdropPath = "https://image.tmdb.org/t/p/original" + backdrop_path,
            posterPath = "https://image.tmdb.org/t/p/original" + poster_path,
            monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      let d = new Date(first_air_date),
          firstAirDate = d.getDate() + " " + monthArray[d.getMonth()] + " " + d.getFullYear();
      this.setState(($prevState, $nowProps) => {
        return{
          languageCodes: languageCodesResponse,
          searchResultsObject: {
            backdropPath,
            imageContainer: {
              posterPath,
            },
            postContainer: {
              name,
              overview,
              genres,
              languages,
              firstAirDate,
              createdBy
            },
            ratingElement: {
              voteAverage,
              SeasonsNum,
              EpisodesNum
            },
            seasonsListingElement: {
              seasons
            },
            creditsListingElement: {
              credits: credits.cast
            },
            similarShowElement: {
              similar: similar.results
            }
          }
        }
      })
    }).catch((errorResponse) => {
      console.log(errorResponse);
    })
  }
  
  render(){
    const { searchResultsObject, languageCodes } = this.state;
    return(
      <WrapperObj>
      {
        (searchResultsObject) ? 
        <div className="tv-bio outer-border">
          <div className="tv-bio-jumbo position__relative">
            <CurtainElement />
            <BackdropElement bgImg={searchResultsObject.backdropPath} />
            <div className="content-box position__relative">
              <Row className="show-grid">
                <Col xs={12} sm={6} className="seg-container">
                  <ImageUnitElement {...searchResultsObject.imageContainer} name={searchResultsObject.postContainer.name} />
                </Col>
                <Col xs={12} sm={6} className="seg-container">
                  <PostContainerElement lCodes={languageCodes} {...searchResultsObject.postContainer} />
                </Col>
              </Row>
            </div>
          </div>
          <div className="seasons-box-container">
            <RatingRadialElement {...searchResultsObject.ratingElement} />
            <SeasonsListingElement {...searchResultsObject.seasonsListingElement} />
            <CreditsListingElement {...searchResultsObject.creditsListingElement} />
            <SimilarShowElement {...searchResultsObject.similarShowElement} />
          </div>
        </div>
        : null
      }
      </WrapperObj>
    )
  }
  
  componentDidMount(){
    let locationQuery = this.props.location.search,
        searchObject = this.makeLocationQuerySplit(locationQuery);
    this.buildTvBio(searchObject);
  }
}

export default TvBioComponent;