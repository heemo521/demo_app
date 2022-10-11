import React, {FunctionComponent} from 'react'
import ExploreEvents from './ExploreEvents'
import ExploreNav from './ExploreNav'
import {Events} from './Types/APIResponsesTypes'
import {IExploreMainProps} from '../ExploreMain'

interface IExploreBodyProps extends IExploreMainProps {
  eventList: Events[]
}

const ExploreBody: FunctionComponent<IExploreBodyProps> = props => {
  const {eventList} = props

  return (
    <div className='Explore-body'>
      <div className='Explore-body-main'>
        <ExploreNav {...props} />
        <ExploreEvents {...props} />
      </div>
    </div>
  )
}

export default ExploreBody
