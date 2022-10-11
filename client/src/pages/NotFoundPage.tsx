import React, {FunctionComponent, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage: FunctionComponent = props => {
  useEffect(() => {
    document.title = '404! Page Not Found'
    const timer = setTimeout(() => window.location.assign('/explore'), 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='Not_Found'>
      <h1>404! PAGE NOT FOUND</h1>
      There was an error with this page. <Link to='/explore'>Click here</Link> to back to the home page or wait five
      seconds.
    </div>
  )
}

export default NotFoundPage
