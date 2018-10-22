import React from 'react';
import { Row, Clearfix } from 'react-bootstrap';
import WrapperObj from './wrapper-object.js';
import SimilarElement from './similar-element.js';

const SimilarShowsElement = ({similar}) => {
  return(
    <WrapperObj>
    {
      !!similar && similar.length > 0 && 
      <div className="similar">
        <div className="outer-container">
          <div className="block-heading">
            <header>
              <h3>Similar<br/><span>TV Shows</span></h3>
            </header>
          </div>
          <Row className="show-grid">
          {
            similar.map((similarObj, index) => {
              if((index + 1) === 2){
                return(
                  <WrapperObj key={similarObj.name + index}>
                    <SimilarElement {...similarObj} />
                    <Clearfix visibleXsBlock></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 2 === 0 && (index + 1) % 3 === 0 && (index + 1) % 4 === 0){
                return(
                  <WrapperObj key={similarObj.name + index}>
                    <SimilarElement {...similarObj} />
                    <Clearfix></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 4 === 0){
                return(
                  <WrapperObj key={similarObj.name + index}>
                    <SimilarElement {...similarObj} />
                    <Clearfix visibleMdBlock visibleLgBlock></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 3 === 0){
                return(
                  <WrapperObj key={similarObj.name + index}>
                    <SimilarElement {...similarObj} />
                    <Clearfix visibleSmBlock></Clearfix>
                  </WrapperObj>
                )
              } else if((index + 1) % 2 === 0){
                return(
                  <WrapperObj key={similarObj.name + index}>
                    <SimilarElement {...similarObj} />
                    <Clearfix visibleXsBlock></Clearfix>
                  </WrapperObj>
                )
              } else {
                return(
                  <SimilarElement {...similarObj} key={similarObj.name + index} />
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

export default SimilarShowsElement;