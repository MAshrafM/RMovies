import React, { Component } from 'react';

import FormComponent from '../form-component/form-component.js';
import NoResultsComponent from './no-results-component.js';
import SearchResultsListing from './search-results-listing.js';

import './search-results-component.css';


import { connect } from 'react-redux';
import { MapStateToProps, MapDispatchToProps } from '../../redux-reducer/mapping.js';

import axios from 'axios';
import ApiObject from '../../axios/api.js';


const WrapperObj = (props) => {
  return props.children;
}

class SearchResultsComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      paginationActivePage: null,
      searchListingResults: null,
      searchType: null
    };
    
    this.paginationHandleChange = this.paginationHandleChange.bind(this);
    this.makeLocationQuerySplit = this.makeLocationQuerySplit.bind(this);
    this.makeSearchApi = this.makeSearchApi.bind(this);
  }
  
  paginationHandleChange(PageNum){
    let locQuery = this.props.location.search,
        currentSearchParams = this.makeLocationQuerySplit(locQuery);
        
    currentSearchParams.pn = PageNum;
    let newQueryUrl = "?qt=" + currentSearchParams.qt + "&pn=" + currentSearchParams.pn + "&st=" + currentSearchParams.st;
    this.makeSearchApi(currentSearchParams);
    this.props.history.push("/search-results" + newQueryUrl);
  }
  
  makeSearchApi(SearchObj){
    axios.get(ApiObject.baseUrl + "search/" + SearchObj.st, {
      params: {
        api_key: ApiObject.apiKey,
        query: SearchObj.qt.split("-").join(" "),
        page: SearchObj.pn,
        adult: false
      }
    }).then((apiResponse) => {
      if(apiResponse.status !== 200 && apiResponse.statusText !== "OK"){
        return apiResponse.statusText
      }
      return apiResponse.data;
    }).then((successResponse) => {
      this.setState(($prevState, $nowProps) => {
        return {
          searchListingResults: successResponse,
          paginationActivePage: SearchObj.pn,
          searchType: SearchObj.st
        }
      });
    }).catch((apiErrorStatusText) => {
      console.error("#-#-#- Error Response from request =>", apiErrorStatusText);
    });
  };
  
  makeLocationQuerySplit(locQuery){
    let sObj = {};
    if("URLSearchParams" in window && "entries" in URLSearchParams.prototype){
      let urlParams = new URLSearchParams(locQuery).entries();
      for(let ValuePair of urlParams){
        sObj[ValuePair[0]] = ValuePair[1];
      }
    } else {
      let locQuerySplit = locQuery.split("?")[1].split("&");
      for(let i = 0; i < locQuerySplit.length; i++){
        let ValuePair = locQuerySplit[i].split("=");
        sObj[ValuePair[0]] = ValuePair[1];
      }
    }
    return sObj;
  }
  
  render(){
    let resultsListingSetup = {
      activePageNum: this.state.paginationActivePage,
      paginationChangeHandler: this.paginationHandleChange
    };
    if(this.state.searchListingResults){
      let {results: resultsArray, total_pages: totalPages, total_results: totalResults} = this.state.searchListingResults;
      if(!!resultsArray && !!totalPages && !!totalResults){
        resultsListingSetup.resultsArray = resultsArray;
        resultsListingSetup.totalPages = totalPages;
        resultsListingSetup.totalResults = totalResults;
        resultsListingSetup.searchType = this.state.searchType;
      }
    }
    
    return(
      <div className="outer-border search-results">
      {
        !!resultsListingSetup.totalResults && resultsListingSetup.totalResults > 0 ? <SearchResultsListing setupProps={resultsListingSetup} /> : 
        <WrapperObj>
          <NoResultsComponent />
          <FormComponent />
        </WrapperObj>
      }
      </div>
    );
  };
  
  componentDidMount(){
    let locQuery = this.props.location.search,
        searchObj = this.makeLocationQuerySplit(locQuery);
    this.makeSearchApi(searchObj);
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(SearchResultsComponent);