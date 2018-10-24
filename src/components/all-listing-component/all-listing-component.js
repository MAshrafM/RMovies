import React, { Component } from 'react'
import { Row, Button, Clearfix } from 'react-bootstrap'

import axios from 'axios'
import apiObject from '../../axios/api'

import MovieListingElement from './movie-listing-element'
import PopularPeopleElement from './popular-people-element'
import WrapperObj from './wrapper-object'

import './all-listing-component.css'

class AllListingComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      movieNowPlaying: null,
      tvNowPlaying: null,
      popularPeople: null
    }
    
    this.initApi = this.initApi.bind(this)
    this.getMovie = this.getMovie.bind(this)
    this.getTv = this.getTv.bind(this)
    this.getPeople = this.getPeople.bind(this)
  }
  
  getMovie(){
    let movies = axios.get(apiObject.baseUrl + "movie/now_playing", {
      params: {
        api_key: apiObject.apiKey,
        page: "1"
      }
    }).then((apiResponseObject) => {
      if(apiResponseObject.status === 200 || apiResponseObject.statusText === "OK") {
        return apiResponseObject.data.results;
      }
      else {
        return apiResponseObject
      }
    }).catch((errorResponse) => {
      console.error("Something Went Wrong");
    });
    console.log(movies)
    return movies;
  }
  
  getTv(){
    let tv = axios.get(apiObject.baseUrl + "tv/on_the_air", {
      params: {
        api_key: apiObject.apiKey,
        page: "1"
      }
    }).then((apiResponseObject) => {
      if(apiResponseObject.status === 200 || apiResponseObject.statusText === "OK") {
        return apiResponseObject.data.results;
      }
      else {
        return apiResponseObject
      }
    }).catch((errorResponse) => {
      console.error("Something Went Wrong");
    });
    
    return tv;
  }
  
  getPeople(){
    let people = axios.get(apiObject.baseUrl + "person/popular", {
      params: {
        api_key: apiObject.apiKey,
        page: "1"
      }
    }).then((apiResponseObject) => {
      if(apiResponseObject.status === 200 || apiResponseObject.statusText === "OK") {
        return apiResponseObject.data.results;
      }
      else {
        return apiResponseObject
      }
    }).catch((errorResponse) => {
      console.error("Something Went Wrong");
    });
    
    return people;
  }
  
  initApi(){
    axios.all([this.getMovie(), this.getTv(), this.getPeople()]).then(axios.spread((moviesResponse, tvResponse, peopleResponse) => {
      let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          moviesArr = [],
          tvArr = [],
          peopleArr = [];
          
      moviesResponse.forEach(({poster_path, original_title, vote_average, release_date}, index) => {
        if(index <=11){
          let d = new Date(String(release_date)),
              movieRelease = d.getDate() + " " + monthArray[d.getMonth()] + " " + d.getFullYear();
          
          moviesArr.push({
            imgUrl: "https://image.tmdb.org/t/p/original" + poster_path,
            movieName: original_title,
            rating: vote_average,
            releaseDate: movieRelease
          })
        }
      })
      
      tvResponse.forEach(({poster_path, original_name, vote_average, first_air_date}, index) => {
        if(index <=11){
          let d = new Date(String(first_air_date)),
              movieRelease = d.getDate() + " " + monthArray[d.getMonth()] + " " + d.getFullYear();
          
          tvArr.push({
            imgUrl: "https://image.tmdb.org/t/p/original" + poster_path,
            movieName: original_name,
            rating: vote_average,
            releaseDate: movieRelease
          })
        }
      })
      
      peopleResponse.forEach(({profile_path, name}, index) => {
        if(index <= 11){
          peopleArr.push({
            imgUrl: "https://image.tmdb.org/t/p/original" + profile_path,
            personName: name,
          })
        }
      })
      
      this.setState(($prevState, $nowProps) => {
        return{
          movieNowPlaying: moviesArr,
          tvNowPlaying: tvArr,
          popularPeople: peopleArr
        }
      })
    }))
  }
  
  render(){
    return(
      <div className="all-listing outer-border">
        <div className="all-listing-container">
          <div className="block-heading">
            <header>
              <h2>Movies<br/><span>Now Playing</span></h2>
            </header>
            <Button className="default-btn">See More</Button>
          </div>
          <Row className="show-grid">
            {
              !!this.state.movieNowPlaying &&
                this.state.movieNowPlaying.map((movieObj, index) => {
                  if((index + 1) % 4 === 0) {
                    return (
                      <WrapperObj key={movieObj.movieName}>
                        <MovieListingElement {...movieObj}/>
                        <Clearfix visibleLgBlock></Clearfix>
                      </WrapperObj>
                    );
                  }
                  else if((index + 1) % 3 === 0) {
                    return (
                      <WrapperObj key={movieObj.movieName}>
                        <MovieListingElement {...movieObj}/>
                        <Clearfix visibleSmBlock visibleMdBlock></Clearfix>
                      </WrapperObj>
                    );
                  }
                  else {
                    return <MovieListingElement {...movieObj} key={movieObj.movieName}/>
                  }
                })
            }
          </Row>
        </div>
        
        <div className="all-listing-container">
          <div className="block-heading">
            <header>
              <h2>TV Shows<br/><span>On Air</span></h2>
            </header>
            <Button className="default-btn">See More</Button>
          </div>
          <Row className="show-grid">
            {
              !!this.state.tvNowPlaying &&
                this.state.tvNowPlaying.map((tvObj, index) => {
                  if((index + 1) % 4 === 0) {
                    return (
                      <WrapperObj key={tvObj.movieName}>
                        <MovieListingElement {...tvObj}/>
                        <Clearfix visibleLgBlock></Clearfix>
                      </WrapperObj>
                    );
                  }
                  else if((index + 1) % 3 === 0) {
                    return (
                      <WrapperObj key={tvObj.movieName}>
                        <MovieListingElement {...tvObj}/>
                        <Clearfix visibleSmBlock visibleMdBlock></Clearfix>
                      </WrapperObj>
                    );
                  }
                  else {
                    return <MovieListingElement {...tvObj} key={tvObj.movieName}/>
                  }
                })
            }
          </Row>
        </div>
        
        <div className="all-listing-container">
          <div className="block-heading">
            <header>
              <h2>People<br/><span>Trending</span></h2>
            </header>
            <Button className="default-btn">See More</Button>
          </div>
          <Row className="show-grid">
            {
              !!this.state.popularPeople &&
                this.state.popularPeople.map((personObj, index) => {
                  if((index + 1) % 4 === 0) {
                    return (
                      <WrapperObj key={personObj.personName}>
                        <PopularPeopleElement {...personObj}/>
                        <Clearfix visibleLgBlock></Clearfix>
                      </WrapperObj>
                    );
                  }
                  else if((index + 1) % 3 === 0) {
                    return (
                      <WrapperObj key={personObj.personName}>
                        <PopularPeopleElement {...personObj}/>
                        <Clearfix visibleSmBlock visibleMdBlock></Clearfix>
                      </WrapperObj>
                    );
                  }
                  else {
                    return <PopularPeopleElement {...personObj} key={personObj.personName}/>
                  }
                })
            }
          </Row>
        </div>
      </div>
    )
  }
  
  componentDidMount(){
    this.initApi()
  }
}

export default AllListingComponent;