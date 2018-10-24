import React from 'react'
import { Row, Clearfix } from 'react-bootstrap'
import SimilarSegment from './similar-segment'
import WrapperObj from './wrapper-object'

const SimilarElement =({similarListing}) => {
  return(
    <WrapperObj>
      <div className="similar-movies position__relative">
        <div className="outer-container">
          <div className="block-heading">
            <header>
              <h3>Similar<br/><span>Movies</span></h3>
            </head>
            <Row className="show-grid">
             {
                similarListing.map((similarObj, index) => {
                  if((index + 1) === 2) {
                    return (
                      <WrapperObject key={similarObj.title + index}>
                        <SimilarSegment {...similarObj}/>
                        <Clearfix visibleXsBlock></Clearfix>
                      </WrapperObject>
                    );
                  }
                  else if((index + 1) % 2 === 0 && (index + 1) % 3 === 0 && (index + 1) % 4 === 0){
                    return (
                      <WrapperObject key={similarObj.title + index}>
                        <SimilarSegment {...similarObj}/>
                        <Clearfix></Clearfix>
                      </WrapperObject>
                    );
                  }
                  else if((index + 1) % 4 === 0) {
                    return (
                    <WrapperObject key={similarObj.title + index}>
                      <SimilarSegment {...similarObj}/>
                      <Clearfix visibleMdBlock visibleLgBlock></Clearfix>
                    </WrapperObject>
                    );
                  }
                  else if((index + 1) % 3 === 0) {
                    return (
                    <WrapperObject key={similarObj.title + index}>
                      <SimilarSegment {...similarObj}/>
                      <Clearfix visibleSmBlock></Clearfix>
                    </WrapperObject>
                    );
                  }
                  else if((index + 1) % 2 === 0) {
                    return (
                    <WrapperObject key={similarObj.title + index}>
                      <SimilarSegment {...similarObj}/>
                      <Clearfix visibleXsBlock></Clearfix>
                    </WrapperObject>
                    );
                  }
                  else {
                    return (
                      <SimilarSegment {...similarObj} key={similarObj.title + index}/>
                    );
                  }
                })
              }
            </Row>
          </div>
        </div>
      </div>
    </WrapperObj>
  )
}

export default SimilarElement;