import React from 'react';
import EmptyTreeIcon from '../../assets/icons/empty-tree-icon.svg';

const NoResultsComponent = (props) => {
  return(
    <section className="no-results-container position__relative">
      <div className="borderbox-container">
        <header>
          <img src={EmptyTreeIcon} className="img-fluid mx-auto header-icon" alt="header icon" title="no results" />
          <h1 className="text-center">No Results</h1>
        </header>
        <p className="text-center">Sorry, but nothing came up in the search.</p>
      </div>
    </section>
  );
};

export default NoResultsComponent;