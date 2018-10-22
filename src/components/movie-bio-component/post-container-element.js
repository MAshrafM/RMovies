import React from 'react'

const PostContainerElement = ({title, overview, genres}) => {
  console.log(genres);
  return(
    <div className="post-container position__relative">
      <h1>{title}</h1>
      <ul className="list-unstyled genere-list">
      { 
        genres ? 
        genres.map((genre, index) => {
          return(
            <li key={genre.name + index}>{genre.name}</li>
          )
        }) : null
      }
      </ul>
      <p>{overview}</p>
    </div>    
  )
}

export default PostContainerElement;