import React from 'react';
import LocIcon from '../../assets/icons/location-icon.svg';

const ReleaseRatingElement = (props) => {
  return(
    <div className="release-rating position__relative">
      <div className="outer-container">
        <div className="block-heading">
          <header>
            <h3>Release Dates<br/><span>And Rating</span></h3>
          </header>
        </div>
        <div className="countries">
          <div className="country-block">
            <div className="country-header">
              <header>
                <img src={LocIcon} className="img-fluid" alt="location" title="location" />
                <h4 className="text-center">US</h4>
                <p className="text-center">United States</p>
              </header>
            </div>
            <div className="country-body">
              <ul className="list-unstyled">
                <li>
                  <div className="borderbox-container">
                    <p className="rating">R <span>Rating</span></p>
                    <p className="type">Theatrical Release</p>
                    <p className="date">30 Mar 1999</p>
                  </div>
                </li>
                <li>
                  <div className="borderbox-container">
                    <p className="rating">PG-12 <span>Rating</span></p>
                    <p className="type">Theatrical Release</p>
                    <p className="date">30 Mar 1999</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReleaseRatingElement;