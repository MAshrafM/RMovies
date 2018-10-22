import React from 'react';
import { Row, Clearfix } from 'react-bootstrap';
import WrapperObj from './wrapper-object.js';
import SeasonsElement from './seasons-element.js';

const SeasonsListingElement = ({seasons}) => {
  const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return(
    <WrapperObj>
    {
      !!seasons && seasons.length > 0 &&
      <div className="seasons">
        <div className="outer-container">
          <div className="block-heading">
            <header>
              <h3>Seasons<br/><span>Full Listings</span></h3>
            </header>
          </div>
          <Row className="show-grid">
          {
            seasons.map((season, index) => {
              const d = new Date(season.air_date),
                    airDateValue = d.getDate() + " " + monthArr[d.getMonth()] + " " + d.getFullYear();
              if((index + 1) === 2){
                return(
                  <WrapperObj key={season.name + index}>
                    <SeasonsElement {...season} airDateValue={airDateValue} />
                    <Clearfix visibleXsBlock></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 2 === 0 && (index + 1) % 3 === 0 && (index + 1) % 4 === 0){
                return(
                  <WrapperObj key={season.name + index}>
                    <SeasonsElement {...season} airDateValue={airDateValue} />
                    <Clearfix></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 4 == 0){
                return(
                  <WrapperObj key={season.name + index}>
                    <SeasonsElement {...season} airDateValue={airDateValue} />
                    <Clearfix visibleMdBlock visibleLgBlock></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 3 == 0){
                return(
                  <WrapperObj key={season.name + index}>
                    <SeasonsElement {...season} airDateValue={airDateValue} />
                    <Clearfix visibleSmBlock></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 2 == 0){
                return(
                  <WrapperObj key={season.name + index}>
                    <SeasonsElement {...season} airDateValue={airDateValue} />
                    <Clearfix visibleXsBlock></Clearfix>
                  </WrapperObj>
                )
              } else {
                return(
                  <SeasonsElement {...season} airDateValue={airDateValue} key={season.name + index} />
                )
              }
            })
          }
          </Row>
        </div>
      </div>
    }
    </WrapperObj>
  )
}

export default SeasonsListingElement;