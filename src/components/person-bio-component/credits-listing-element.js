import React from 'react';
import { Clearfix } from 'react-bootstrap';
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
          <CreditElement {...creditObj} />
          <Clearfix visibleXsBlock></Clearfix>
        </WrapperObj>
      )
    } else if((index + 1) % 2 === 0 && (index + 1) % 3 === 0 && (index + 1) % 4 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
          <CreditElement {...creditObj} />
          <Clearfix visibleXsBlock visibleSmBlock visibleMdBlock visibleLgBlock></Clearfix>
        </WrapperObj>
      )
    } else if((index + 1) % 2 === 0 && (index + 1) % 4 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
          <CreditElement {...creditObj} />
          <Clearfix visibleXsBlock visibleLgBlock></Clearfix>
        </WrapperObj>
      )
    } else if((index + 1) % 2 === 0 && (index + 1) % 3 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
            <CreditElement {...creditObj} />
            <Clearfix bsClass="clearfix hidden-lg" ></Clearfix>
        </WrapperObj>
      )
    } else if((index + 1) % 4 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
          <CreditElement {...creditObj} />
          <Clearfix visibleLgBlock></Clearfix>
        </WrapperObj>
      )
    } else if((index + 1) % 3 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
          <CreditElement {...creditObj} />
          <Clearfix bsClass="clearfix hidden-xs hidden-lg"></Clearfix>
        </WrapperObj>
      )
    } else if((index + 1) % 2 === 0){
      return(
        <WrapperObj key={credit.mediaName + index}>
          <CreditElement {...creditObj} />
          <Clearfix visibleXsBlock></Clearfix>
        </WrapperObj>
      )
    } else {
      return(
        <CreditElement {...creditObj} key={credit.mediaName + index} />
      )
    } 
  })
  return creditsArray;
}

export default CreditsLisitingElement;