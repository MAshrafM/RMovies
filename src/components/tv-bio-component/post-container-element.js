import React from 'react'
import WrapperObj from './wrapper-object.js'

const PostContainerElement = ({name, genres, languages, lCodes, overview, firstAirDate, createdBy}) => {
  return(
    <div className="post-container">
      <h1>{name}</h1>
      <ul className="list-unstyled genre-list">
      {
        genres.map((genre, index) => {
          return(
            <li key={genre + index}>{genre.name}</li>
          )
        })
      }
      </ul>
      <ul className="list-unstyled language-list">
      {
        languages.map((lang, index) => {
          let codeObj = lCodes.find((code, index) => {
            return code.code === lang
          });
          return(
            <li key={lang+index}>{codeObj.name}</li>
          )
        })
      }
      </ul>
      <p className="about-info">{overview}</p>
      <p className="first-release-info">First Released<br/><span>{firstAirDate}</span></p>
        {
          createdBy.length > 0 &&
          <WrapperObj>
            <h2 className="created-by">Created By</h2>
            <ul className="list-unstyled created-by-list">
            {
              createdBy.map((element, index) => {
                return(
                  <li key={element.name.split(" ").join("-")}>
                    <img src={`https://image.tmdb.org/t/p/original` + element.profile_path} className="img-fluid" alt={element.name} title={element.name} />
                      {element.name}
                  </li>
                )
              })
            }
            </ul>
          </WrapperObj>
        }
    </div>    
  )
}

export default PostContainerElement;