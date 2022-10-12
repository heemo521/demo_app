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
  // Create date object for each event first and then sort...
  // read a comment about how creating Date in side the sort can negatively affect performance
  // So needs some testing
  const sortedEvents = eventList
    .map(event => {
      event.date = new Date(event.startUtc)
      return event
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  console.log(sortedEvents)

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
