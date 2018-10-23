import React from 'react';
import { Row, Clearfix } from 'react-bootstrap';
import WrapperObj from './wrapper-object.js';
import CreditElement from './credit-element.js';

const CreditsLisitingElement = ({castArray, forType}) => {
  let creditsArray = castArray.map((credit, index) => {
    let creditObj = {
      imgUrl: "https://image.tmdb.org/t/p/w500" + credit.poster_path,
      mediaName: credit.title || credit.name,
      index
    }
    
    if(credit.episode_count){
      creditObj.episodeCount = credit.episodeCount
    }
    if(credit.release_date && forType === "movies"){
      creditObj.releaseDate = credit.release_date
    }
    
    if((index + 1) === 2){
      return(
        <WrapperObj key={creditObj.mediaName + index}>
          <CreditsElement {...creditObj} />
          <Clearfix visibleXsBlock></Clearfix>
        </WrapperObj>
      )
    } else if((index + 1) % 2 === 0 && (index + 1) % 3 === 0 && (index + 1) % 4 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
          <CreditsElement {...creditObj} />
          <Clearfix visibleXsBlock visibleSmBlock visibleMdBlock visibleLgBlock></Clearfix>
        </WrapperObj>
      )
    } else if(((index + 1) % 2 === 0 && (index + 1) % 4 === 0){
      <WrapperObj key={credit.mediaName + index}>
          <CreditsElement {...creditObj} />
          <Clearfix visibleXsBlock visibleLgBlock></Clearfix>
        </WrapperObj>
    } else if(((index + 1) % 2 === 0 && (index + 1) % 3 === 0){
      <WrapperObj key={credit.mediaName + index}>
          <CreditsElement {...creditObj} />
          <Clearfix bsClass="clearfix hidden-lg" ></Clearfix>
        </WrapperObj>
    } else if((index + 1) % 4 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
          <CreditsElement {...creditObj} />
          <Clearfix visibleLgBlock></Clearfix>
        </WrapperObj>
      )
    } else if((index + 1) % 3 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
          <CreditsElement {...creditObj} />
          <Clearfix bsClass="clearfix hidden-xs hidden-lg"></Clearfix>
        </WrapperObj>
      )
    } else if((index + 1) % 2 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
          <CreditsElement {...creditObj} />
          <Clearfix visibleXsBlock></Clearfix>
        </WrapperObj>
      )
    } else {
      return(
        <CreditsElement {...creditObj} key={credit.mediaName + index} />
      )
    } 
  })
  return creditsArray;
}

export default CreditsLisitingElement;