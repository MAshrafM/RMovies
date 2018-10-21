import React from 'react';

const ProductionCompaniesElement = (props) => {
  return(
    <section className="production-companies position__relative">
      <div className="outer-container">
        <div className="block-heading">
          <header>
            <h2>Production Companies<br/><span>The Works</span></h2>
          </header>
        </div>
        <ul className="list-unstyled">
          <li>
            <div className="borderbox-container">
              Village Roadshow Pictures
            </div>
          </li>
          <li>
            <div className="borderbox-container">
              Warner Bros. Pictures
            </div>
          </li>
          <li>
            <div className="borderbox-container">
              Groucho II Film Partnership
            </div>
          </li>
          <li>
            <div className="borderbox-container">
              Silver Pictures
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProductionCompaniesElement;