import React, { Component } from 'react';

class HomeVideoComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            videoClassValue: 'home__video-parent home__video-parent--hidden'
        }
        this.showVideoComponent = this.showVideoComponent.bind(this);
    }

    showVideoComponent(){
        this.setState(($prevState, nowProps) => {
            return{
                videoClassValue: 'video__parent'
            };
        });
    }

    render(){
        let { videoBuildObj } = this.props;
        return(
            <div className={this.state.videoClassValue}>
                <video className="hidden-xs" autoPlay="autoplay" loop muted playsInline>
                {
                    videoBuildObj.map((element, index) => {
                        return <source src={element.videoUrl} type={element.videoType} key={element.videoType} />
                    })
                }
                </video>
            </div>
        )
    }

    componentDidMount(){
        setTimeout(() => {
            this.showVideoComponent();
        }, 500);
    }
}

export default HomeVideoComponent;