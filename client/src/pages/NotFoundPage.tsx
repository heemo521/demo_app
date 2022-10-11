import React, {FunctionComponent, useEffect} from 'react'
import {Link} from 'react-router-dom'

type Props = {}

const NotFoundPage: FunctionComponent = (props: Props) => {
  return (
    <h2>
      There was an error with this listing. <Link to='/explore'>Click here</Link> to back to the home page or wait five
      seconds.
    </h2>
  )
}

export default NotFoundPage
