import React from 'react';

const ProductionCompaniesElement = ({production_companies}) => {
  return(
    <section className="production-companies position__relative">
      <div className="outer-container">
        <div className="block-heading">
          <header>
            <h2>Production Companies<br/><span>The Works</span></h2>
          </header>
        </div>
        <ul className="list-unstyled">
        {
          production_companies.map((company, index) => {
            return(
              <li key={company.name + index}>
                <div className="borderbox-container">
                {company.name}
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

export default ProductionCompaniesElement;