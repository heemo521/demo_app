import React, {FunctionComponent} from 'react'

import {IExploreMainProps} from '../ExploreMain'

const ExploreNav: FunctionComponent<IExploreMainProps> = props => {
  const {c, t, p, city, setSearchParams} = props

  const onTabClickHandler = (filter: string) => {
    setSearchParams(`?c=${c}&t=${filter}&p=${p}&city=${city}`)
  }

  return (
    <div className='Explore-body-main-nav'>
      <div className='Explore-body-main-nav-right'>
        <div className={t === 'week' ? 'selected' : undefined} onClick={onTabClickHandler.bind(null, 'week')}>
          This Week
        </div>
        <div className={t === 'day' ? 'selected' : undefined} onClick={onTabClickHandler.bind(null, 'day')}>
          Today
        </div>
      </div>
    </div>
  )
}

export default ExploreNav
