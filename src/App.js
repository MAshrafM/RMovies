import React, { Component } from 'react';
import './App.css';
// Routes
import { Switch, Route } from 'react-router-dom';
// Components
import HomeComponent from './components/home-component/home-component.js';
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
          </Switch>
        </WrapperObj>
      </div>
    );
  }
}

export default App;
