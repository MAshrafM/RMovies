import React from 'react';
import {Row} from 'react-bootstrap'
import LocIcon from '../../assets/icons/location-icon.svg';

const ReleaseRatingElement = ({releaseObj}) => {
  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        releaseTypes =  ["Premiere", "Theatrical (Limited)", "Theatrical", "Digital", "Physical", "TV"];
  return(
    <div className="release-rating position__relative">
      <div className="outer-container">
        <div className="block-heading">
          <header>
            <h3>Release Dates<br/><span>And Rating</span></h3>
          </header>
        </div>
        <div className="countries">
        {
          releaseObj.map((obj, index) => {
            return(
            <div className="country-block">
              <Row className="show-grid">
                <div className="country-header">
                  <header>
                    <img src={LocIcon} className="img-fluid" alt="location" title="location" />
                    <h4 className="text-center">{obj.iso_3166_1}</h4>
                    <p className="text-center">United States</p>
                  </header>
                </div>
                <div className="country-body">
                  <ul className="list-unstyled">
                  {
                    obj.release_dates.map((info, index) => {
                      const d = new Date(info.release_date),
                      releaseDateValue = d.getDate() + " " + monthArray[d.getMonth()] + " " + d.getFullYear(),
                      certification = !!info.certification ? info.certification : "-No Info-";
                      
                      return(
                        <li key={index}>
                          <div className="borderbox-container">
                            <p className="rating">{certification}<span>Rating</span></p>
                            <p className="type">{releaseTypes[Number(info.type)]}</p>
                            <p className="date">{releaseDateValue}</p>
                          </div>
                        </li>
                      )
                    })
                  }
                  </ul>
                </div>
              </Row>
            </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default ReleaseRatingElement;