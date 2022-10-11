import React, {FunctionComponent, useEffect, useState} from 'react'
import {isToday} from 'utils/isToday'
import ExploreEventsCard from './ExploreEventsItem'

import {Events} from './Types/APIResponsesTypes'

const ExploreEvents: FunctionComponent<{eventList: Events[]; t: string}> = ({eventList, t}) => {
  const [filterToday, setFilterToday] = useState(false)
  useEffect(() => {
    if (t === 'day') {
      setFilterToday(true)
    } else {
      setFilterToday(false)
    }
  }, [t])

  return (
    <div className='Explore-body-main-results EventCardGrid'>
      {eventList.map(eventCard => {
        if ((filterToday && isToday(eventCard.startUtc) === 'TODAY') || !filterToday) {
          return <ExploreEventsCard key={eventCard._id} eventCard={eventCard} />
        }
      })}
    </div>
  )
}

export default ExploreEvents
