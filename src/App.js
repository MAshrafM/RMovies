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
import {NavComponent, NavbarComponent} from './components/nav-component/nav-component';
// props
const WrapperObj = (props) => {
  return props.children;
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      navShow: false
    }
    
    this.handleMenuToggle = this.handleMenuToggle.bind(this)
  }
  
  handleMenuToggle(){
    this.setState(($prevState, $nowProps) => {
      return{
        navShow: !$prevState.navShow
      }
    })
  }
  
  render() {
    return (
      <div>
        <WrapperObj>
          <nav>
            <NavbarComponent onClickHandle={this.handleMenuToggle} />
            <NavComponent showNav={this.state.showNav} onClickHandle={this.handleMenuToggle} />
          </nav>
        </WrapperObj>
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
