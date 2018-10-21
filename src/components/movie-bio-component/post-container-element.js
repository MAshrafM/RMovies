import React from 'react'

const PostContainerElement = (props) => {
  return(
    <div className="post-container position__relative">
      <h1>The Matrix</h1>
      <ul className="list-unstyled genere-list">
        <li>Action</li>
        <li>Science Fiction</li>
      </ul>
      <p>Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.</p>
    </div>    
  )
}

export default PostContainerElement;