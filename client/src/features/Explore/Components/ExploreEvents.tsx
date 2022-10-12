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

  // Need to order the events by date... (the data should be for the next 7 days)
  const sortedEvents = eventList.sort((a, b) => {
    const dateA = new Date(a.startUtc)
    const dateB = new Date(b.startUtc)
    if (dateA < dateB) {
      return -1
    }
    if (dateA > dateB) {
      return 1
    }
  })

  return (
    <div className='Explore-body-main-results EventCardGrid'>
      {sortedEvents.map(eventCard => {
        if ((filterToday && isToday(eventCard.startUtc) === 'TODAY') || !filterToday) {
          return <ExploreEventsCard key={eventCard._id} eventCard={eventCard} />
        }
      })}
    </div>
  )
}

export default ExploreEvents
