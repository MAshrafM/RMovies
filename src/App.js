import React, { Component } from 'react';
import './App.css';
// Routes
import { Switch, Route } from 'react-router-dom';
// Components
import HomeComponent from './components/home-component/home-component.js';
import SearchResultsComponent from './components/search-results-component/search-results-component.js';
import MovieBioComponent from './components/movie-bio-component/movie-bio-component.js';

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
          </Switch>
        </WrapperObj>
      </div>
    );
  }
}

export default App;
