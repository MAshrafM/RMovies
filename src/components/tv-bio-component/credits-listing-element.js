import React from 'react';
import { Row, Clearfix } from 'react-bootstrap';
import WrapperObj from './wrapper-object.js';
import CreditsElement from './credits-element.js';

const CreditsLisitingElement = ({creditsInfo}) => {
  return(
    <WrapperObj>
    {
      !!creditsInfo && creditsInfo.length > 0 && 
      <div className="credits">
        <div className="outer-container">
          <div className="block-heading">
            <header>
              <h3>Seasons<br/><span>Full Listings</span></h3>
            </header>
          </div>
          <Row className="show-grid">
          {
            creditsInfo.map((credit, index) => {
              if((index + 1) === 2){
                return(
                  <WrapperObj key={credit.name + index}>
                    <CreditsElement {...credit} />
                    <Clearfix visibleXsBlock></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 2 === 0 && (index + 1) % 3 === 0 && (index + 1) % 4 === 0){
                return(
                  <WrapperObj key={credit.name + index}>
                    <CreditsElement {...credit} />
                    <Clearfix></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 4 === 0){
                return(
                  <WrapperObj key={credit.name + index}>
                    <CreditsElement {...credit} />
                    <Clearfix visibleMdBlock visibleLgBlock></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 3 === 0){
                return(
                  <WrapperObj key={credit.name + index}>
                    <CreditsElement {...credit} />
                    <Clearfix visibleSmBlock></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 2 === 0){
                return(
                  <WrapperObj key={credit.name + index}>
                    <CreditsElement {...credit} />
                    <Clearfix visibleXsBlock></Clearfix>
                  </WrapperObj>
                )
              } else {
                return(
                  <CreditsElement {...credit} key={credit.name + index} />
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

export default CreditsLisitingElement;