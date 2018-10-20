import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

import SearchItemComponent from './search-item-component.js'

const SearchResultsListing = ({setupProps}) => {
  return(
    <div className="results-listing">
      <Row className="show-grid">
        <Col xs={12} sm={6} md={4} className="search-top-seg heading">
          <header>
            <h2>Search Results</h2>
            <p>We have found {setupProps.totalResults} entries.</p>
          </header>
        </Col>
        <Col xs={12} md={8} className="search-top-seg content">
          <Row className="show-grid">
            <SearchItemComponent resultsArr={setupProps.resultsArray} searchType={setupProps.searchType} />
          </Row>
          <div className="pagination__container text-center">
          {
            setupProps.totalPages > 1 && 
            <Pagination onChange={setupProps.paginationChangeHandler}
            activePage={Number(setupProps.activePageNumber)}
            totalItemsCount={setupProps.totalResults}
            pageRangeDisplayed={3}
            itemCountPerPage={20}
            />
          }
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchResultsListing;