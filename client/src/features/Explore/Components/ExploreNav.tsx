import React, {FunctionComponent} from 'react'
import {Link} from 'react-router-dom'

const ExploreNav: FunctionComponent<{t: string}> = ({t}) => {
  return (
    <div className='Explore-body-main-nav'>
      <div className='Explore-body-main-nav-right'>
        <div className={t === 'week' ? 'selected' : undefined}>
          <Link to=''>This Week </Link>
        </div>
        <div className={t === 'day' ? 'selected' : undefined}>
          <Link to=''>Today </Link>
        </div>
      </div>
    </div>
  )
}

export default ExploreNav
