import React from 'react';
import LocIcon from '../../assets/icons/location-icon.svg';

const ProductionCountriesElement = (props) => {
  return(
    <section className="production-countries position__relative">
      <div className="outer-container">
        <div className="block-heading">
          <header>
            <h3>Production Countries<br/><span>The Where</span></h3>
          </header>
        </div>
        <ul className="list-unstyled">
          <li>
            <div className="borderbox-container">
              <img src={LocIcon} className="img-fluid" alt="location" title="location" />
              <span className="short-code">au</span>
              <span className="country-name">Australia</span>
            </div>
          </li>
          <li>
            <div className="borderbox-container">
              <img src={LocIcon} className="img-fluid" alt="location" title="location" />
              <span className="short-code">us</span>
              <span className="country-name">United States</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProductionCountriesElement;