import React, { Component } from 'react';
import './App.css';
// Routes
import { Switch, Route } from 'react-router-dom';
// Components
import HomeComponent from './components/home-component/home-component.js';
import SearchResultsComponent from './components/search-results-component/search-results-component.js';
import MovieBioComponent from './components/movie-bio-component/movie-bio-component.js';
import TvBioComponent from './components/tv-bio-component/tv-bio-component.js';
import PersonBioComponent from './components/person-bio-component/person-bio-component.js';
import AllListingComponent from './components/all-listing-component/all-listing-component';
// props
const WrapperObj = (props) => {
  return props.children;
}

class App extends Component {
  render() {
    return (
      <div>
        <WrapperObj>
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/search-results" component={SearchResultsComponent} />
            <Route path="/movie-bio" component={MovieBioComponent} />
            <Route path="/tv-bio" component={TvBioComponent} />
            <Route path="/person-bio" component={PersonBioComponent} />
            <Route path="/all-listing" component={AllListingComponent} />
          </Switch>
        </WrapperObj>
      </div>
    );
  }
}

export default App;
