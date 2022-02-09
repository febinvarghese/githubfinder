import React from 'react'

function Home() {
  return (
    <div> 
        <h1> {process.env.REACT_APP_GITHUB_URL} </h1>
    </div>
  )
}

export default Home