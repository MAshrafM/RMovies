import React from 'react';
import SearchItem from './search-item.js';
import { Clearfix } from 'react-bootstrap';


const WrapperObj = (props) => {
  return props.children;
}

const SearchItemComponent = ({resultsArr, searchType}) => {
  return(
    <WrapperObj>
    {
      !!resultsArr && resultsArr.map((ResultObj, index) => {
        let searchKeyValue = (ResultObj.name || ResultObj.original_title) + index;
        if((index + 1) === 2){
          return(
            <WrapperObj key={searchKeyValue}>
              <SearchItem {...ResultObj} searchType={searchType} />
              <Clearfix visibleXsBlock></Clearfix>
            </WrapperObj>
          );
        } else if((index + 1) % 2 === 0 && (index + 1) % 3 === 0){
          return(
            <WrapperObj key={searchKeyValue}>
              <SearchItem {...ResultObj} searchType={searchType} />
              <Clearfix></Clearfix>
            </WrapperObj>
          );
        } else if((index + 1) % 3 === 0){
          return(
            <WrapperObj key={searchKeyValue}>
              <SearchItem {...ResultObj} searchType={searchType} />
              <Clearfix visibleSmBlock visibleMdBlock visibleLgBlock></Clearfix>
            </WrapperObj>
          );
        } else if((index + 1) % 2 === 0){
          return(
            <WrapperObj key={searchKeyValue}>
              <SearchItem {...ResultObj} searchType={searchType} />
              <Clearfix visibleXsBlock></Clearfix>
            </WrapperObj>
          );
        } else {
          return(
            <SearchItem {...ResultObj} key={searchKeyValue} searchType={searchType} />
          )
        }
      })
    }
    </WrapperObj>
  )
}

export default SearchItemComponent;