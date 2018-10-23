import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import apiObject from '../../axios/api'
import CreditsListingElement from './credits-listing-element'
import ExpandIcon from '../../assets/icons/expand-icon.svg'
import CloseIcon from '../../assets/icons/close-icon-w.svg'
import RatingIcon from '../../assets/icons/rating-icon.svg'
import './person-bio-component.css'

class PersonBioComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      showBioModal: false,
      showMiniMovieModal: false,
      celebObj: {}
    }
    
    this.openBioModal = this.openBioModal.bind(this)
    this.closeBioModal = this.closeBioModal.bind(this)
    this.openMiniMovieModal = this.openMiniMovieModal.bind(this)
    this.closeMiniMovieModal = this.closeMiniMovieModal.bind(this)
    this.buildCeleb = this.buildCeleb.bind(this)
    this.getBasics = this.getBasics.bind(this)
    this.getMovieCredits = this.getMovieCredits.bind(this)
    this.getTvCredits = this.getTvCredits.bind(this)
  }
  
  openBioModal(event){
    this.setState(($prevState, $nowProps) => {
      return{
        showBioModal: true
      }
    })
  }
  
  closeBioModal(event){
    this.setState(($prevState, $nowProps) => {
      return{
        showBioModal: false
      }
    })
  }
  
  openMiniMovieModal(event){
    this.setState(($prevState, $nowProps) => {
      return{
        showMiniMovieModal: true
      }
    })
  }
  
  closeMiniMovieModal(event){
    this.setState(($prevState, $nowProps) => {
      return{
        showMiniMovieModal: false
      }
    })
  }
  
  getBasics(id){
    let basics = axios.get(apiObject.baseUrl + "person/" + id, {
      params: {
        api_key: apiObject.apiKey
      }
    }).then((apiResponseObject) => {
      if(apiResponseObject.status === 200 || apiResponseObject.statusText === "OK") {
        return apiResponseObject.data;
      }
      else {
        return apiResponseObject
      }
    }).catch((errorResponse) => {
      console.error("Something Weng Wrong");
    });
    
    return basics;
  }
  
  getMovieCredits(id){
    let movie = axios.get(apiObject.baseUrl + "person/" + id + "/movie_credits", {
      params: {
        api_key: apiObject.apiKey
      }
    }).then((apiResponseObject) => {
      if(apiResponseObject.status === 200 || apiResponseObject.statusText === "OK") {
        return apiResponseObject.data;
      }
      else {
        return apiResponseObject
      }
    }).catch((errorResponse) => {
      console.error("Something Weng Wrong");
    });
    
    return movie;
  }
  
  getTvCredits(id){
    let tv = axios.get(apiObject.baseUrl + "person/" + id + "/tv_credits", {
      params: {
        api_key: apiObject.apiKey
      }
    }).then((apiResponseObject) => {
      if(apiResponseObject.status === 200 || apiResponseObject.statusText === "OK") {
        return apiResponseObject.data;
      }
      else {
        return apiResponseObject
      }
    }).catch((errorResponse) => {
      console.error("Something Weng Wrong");
    });
    
    return tv;
  }
  
  buildCeleb(searchObj){
    const celebName = searchObj.qt.split("-").join(" "),
          celebId = searchObj.qid;
          
    axios.all([this.getBasics(celebId), this.getMovieCredits(celebId), this.getTvCredits(celebId)]).then(axios.spread((basics, movie, tv) => {
      const checkName = basics.name.toLowerCase(),
            checkId = String(basics.id);
            
      if(celebName === checkName && celebId === checkId){
        const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let d = new Date(String(basics.birthday)),
            birthday = d.getDate() + " " + monthArray[d.getMonth()] + " " + d.getFullYear(),
            ageValue = Number((new Date() - d) * 3.171e-11).toFixed(0),
            known_for_department = basics.known_for_department,
            homepage = basics.homepage,
            name = basics.name,
            profile_path = "https://image.tmdb.org/t/p/w500" + basics.profile_path,
            bio = basics.biography,
            also_known_as = basics.also_known_as,
            place_of_birth = basics.place_of_birth,
            movieCast = [],
            tvCast = []
        
        movie.cast.forEach((cast, index) => {
          if(!!cast.poster_path){movieCast.push(cast)}
        })
        
        tv.cast.forEach((cast, index) => {
          if(!!cast.poster_path){tvCast.push(cast)}
        })
        
        this.setState(($prevState, $nowProps) =>{
          return{
            celebObj: {
              birthday,
              ageValue,
              known_for_department,
              place_of_birth,
              homepage,
              name,
              bio,
              also_known_as,
              profile_path,
              movieCast,
              tvCast
            }
          }
        })
      } else {
        throw new Error("Sys Error")
      }
    })).catch((error) => {
      console.log("Smth went wrong")
    })
  }
  
  makeLocationQuerySplit(locationQuery) {
    let searchObject = {};
    if("URLSearchParams" in window && "entries" in URLSearchParams.prototype) {
      let urlParams = new URLSearchParams(locationQuery).entries();
      for(let thisValuePair of urlParams) {
        searchObject[thisValuePair[0]] = thisValuePair[1];
      }
    }
    else {
      let locationQuerySplit = locationQuery.split("?")[1].split("&");
      for (var i = 0; i < locationQuerySplit.length; i++) {
        let thisValuePair = locationQuerySplit[i].split("=");
        searchObject[thisValuePair[0]] = thisValuePair[1];
      }
    }
    return searchObject;
  }
  
  render(){
    let celebObj = this.state.celebObj;
    return(
      <div className="person-bio outer-border">
        <div className="main-bio">
          <Row className="show-grid">
            <Col xs={12} sm={4} lg={4} lgOffset={1} className="main-img-container">
              <div className="borderbox-container position__relative">
                <div className="img-container">
                  <img src={celebObj.profile_path} className="img-fluid mx-auto" alt={celebObj.name} title={celebObj.name} />
                </div>
                <div className="header-container">
                  <header>
                    <h1>{celebObj.name}</h1>
                    <p className="sub-heading">Known For:</p>
                    <ul className="list-unstyled known-for">
                      <li>{celebObj.known_for_department}</li>
                    </ul>
                  </header>
                  <Button className="default-btn bio-pop-btn" title="Open Bio" onClick={this.openBioModal}>
                    Biography
                    <img src={ExpandIcon} className="img-fluid" alt="open bio" title="open bio" />
                  </Button>
                </div>
                <div className="footer-container">
                  <h2>Place of Birth</h2>
                  <p>{celebObj.place_of_birth}</p>
                </div>
                <div className="footer-container">
                  <h2>Date of Birth</h2>
                  <p>{celebObj.birthday} <span className="make-opacity">[{celebObj.ageValue} Years Old]</span></p>
                </div>
                <div className="footer-container">
                  <h2>Website</h2>
                  <p><a href={celebObj.homepage}>{celebObj.homepage}</a></p>
                </div>
                <div className="footer-container">
                  <h2>Also Known As:</h2>
                  <ul className="list-unstyled aka-list">
                  {
                    celebObj.also_known_as && celebObj.also_known_as.map((name) => {
                      return(
                        <li key={name}>{name}</li>
                      )
                    })
                  }
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={8} lg={6} className="main-profile-container">
              <div className="borderbox-container">
                <h3 className="credits-heading">Movie Castings</h3>
                <Row className="show-grid">
                {
                  !!celebObj.movieCast && <CreditsListingElement castArray={celebObj.movieCast} forType="movies" />
                }
                </Row>
              </div>
              <div className="borderbox-container">
                <h3 className="credits-heading">TV Castings</h3>
                <Row className="show-grid">
                {
                  !!celebObj.tvCast && <CreditsListingElement castArray={celebObj.tvCast} />
                }
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <Modal show={this.state.showBioModal} className="default-r-modal bio-modal">
          <Modal.Header>
            <Button className="close-modal" onClick={this.closeBioModal}>
              <img src={CloseIcon} className="img-fluid mx-auto" alt="Close" title="Close"/>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <p>{celebObj.bio}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="default-btn" onClick={this.closeBioModal.bind(this)}> Close </Button>
          </Modal.Footer>
        </Modal>
        
        <Modal show={this.state.showMiniMovieModal} className="default-r-modal mini-movie-modal">
          <Modal.Header>
            <Button className="close-modal" onClick={this.closeMiniMovieModal}>
              <img src={CloseIcon} className="img-fluid mx-auto" alt="Close" title="Close"/>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Row className="show-grid">
              <Col xs={12} sm={5} className="movie-img-container">
                <img src="https://image.tmdb.org/t/p/w500/lgYKHifMMLT8OxYObMKa8b4STsr.jpg" className="img-fluid mx-auto" alt="Example" title="Example"/>
              </Col>
              <Col xs={12} sm={7} className="movie-detail-container">
                <header>
                  <h3>Dream for an Insomniac</h3>
                </header>
                <ul className="list-unstyled genre-tags">
                  <li>Adventure</li>
                  <li>Family</li>
                  <li>Family</li>
                  <li className="rating-block">
                    <img src={RatingIcon} className="img-fluid" alt="Rating" title="Rating"/>
                    Rating: 7.5
                  </li>
                </ul>
                <p className="movie-descrption"><b>About The Movie</b> <br/>Bruce Nolan toils as a "human interest" television reporter in Buffalo, N.Y. Despite his high ratings and the love of his beautiful girlfriend, Grace, Bruce remains unfulfilled. At the end of the worst day in his life, he angrily ridicules God -- and the Almighty responds, endowing Bruce with all of His divine powers.</p>
                <p><b>Jennifer Aniston</b> had played the role as <em>Grace Connelly</em> in this movie.</p>
                <p className="movie-release"><b>Date Of Release: </b> <br/><span>23rd May 2003</span></p>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className="default-btn" onClick={this.closeMiniMovieModal}> Close </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  
  componentDidMount(){
    let locationQuery = this.props.location.search,
        searchObject = this.makeLocationQuerySplit(locationQuery);
    this.buildCeleb(searchObject);
  }
}

export default PersonBioComponent;
