import React from 'react'

const NotFound = () => {
  return (
    <div className = 'movie-card-container'>
      <div className="movie-card">
          <div className="movie-detail">
              <div className="movie-poster" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Error.svg" alt="Error"/> 
              </div>
              <div className="movie-title">
                  <h1> Sorry the page<br/> you were looking for, <br/>was not found and is missing,<br/> please call +91 7058031648 for more info and help</h1>
              </div>
          </div>
      </div>
    </div>
                
  )
}

export default NotFound;
