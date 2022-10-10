import React, {FunctionComponent} from 'react'
import ExploreEventsCard from './ExploreEventsCard'

import {Events} from './APIResponsesTypes'

const ExploreEvents: FunctionComponent<{eventList: Events[]}> = ({eventList}) => {
  return (
    <div className='Explore-body-main-results EventCardGrid'>
      {eventList.map(eventCard => {
        return <ExploreEventsCard key={eventCard._id} eventCard={eventCard} />
      })}
    </div>
  )
}

export default ExploreEvents
