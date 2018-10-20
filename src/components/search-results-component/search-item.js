import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RightArrowIcon from '../../assets/icons/right-arrow-icon.svg';

const SearchItem = (ResultObj) => {
  let searchItemName = ResultObj.name || ResultObj.original_title,
      imageUrl = ResultObj.profile_path || ResultObj.poster_path,
      queryUrl = "?qt=" + searchItemName.toLowerCase().split(" ").join("-") + "&st=" + ResultObj.searchType + "&qid=" + ResultObj.id,
      baseUrl = "/" + ResultObj.searchType + "-bio";
      
  return(
    <Col xs={6} sm={4} className="search-item">
      <Link to={baseUrl + queryUrl}>
        <div className="borderbox-container">
          <div className="img-container">
            <img src={`https://image.tmdb.org/t/p/w500` + imageUrl} className="img-fluid item-img" alt={searchItemName} title={searchItemName} />
          </div>
          <div className="item-name">
            <p>{searchItemName}</p>
          </div>
          <div className="footer-container">
            <img src={RightArrowIcon} className="img-fluid" alt="View Details" title="View Details" />
          </div>
        </div>
      </Link>
    </Col>
  )
}

export default SearchItem;