import React from 'react';
import LocIcon from '../../assets/icons/location-icon.svg';

const ProductionCountriesElement = ({production_countries}) => {
  return(
    <section className="production-countries position__relative">
      <div className="outer-container">
        <div className="block-heading">
          <header>
            <h3>Production Countries<br/><span>The Where</span></h3>
          </header>
        </div>
        <ul className="list-unstyled">
        {
          production_countries.map((country, index) => {
            return(
              <li key={country.name + index}>
                <div className="borderbox-container">
                  <img src={LocIcon} className="img-fluid" alt="location" title="location" />
                  <span className="short-code">{country['iso_3166_1']}</span>
                  <span className="country-name">{country.name}</span>
                </div>
              </li>
            )
          })
        }
        </ul>
      </div>
    </section>
  )
}

export default ProductionCountriesElement;