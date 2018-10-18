import React, { Component } from 'react';
import './home-component.css';

import HomeVideoComponent from './home-video-component';

class HomeComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loadVideoElement: false
        };
        this.loadVideoComponent = this.loadVideoComponent.bind(this);
    }

    loadVideoComponent(){
        this.setState(($prevState, $nowProps) => {
            return {
                loadVideoElement: true
            }
        });
    }

    render(){
        let homeVideoObj = [
            {videoUrl: './assets/images/home-sample-video.webm', videoType: 'video/webm'},
            {videoUrl: './assets/images/home-sample-video.mp4', videoType: 'video/mp4'}
        ];
        let videoComponent = !this.state.loadVideoElement ? null : <HomeVideoComponent videoBuildObj={homeVideoObj} />;

        return(
            <div className="outer_border home">
                <div className="home__jumbotron position__relative">
                    <div className="home__bgcontainer"></div>
                    <div className="home__curtain"></div>
                    {
                        videoComponent
                    }
                    <div className="home__content-unit position__relative">
                        <img src="./assets/icons/app-symbol.svg" className="img-fluid mx-auto home__main-app-icon" alt="RMovies" title="RMovies" />
                        <h1 className="text-center">R<span>Movies</span></h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent;