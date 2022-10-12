import React, {FunctionComponent, useEffect, useState, useRef} from 'react'

import useOnScreen from 'hooks/useOnScreen'
import {getLazyUrl} from '../utils/getLazyUrl'

import {Events} from './Types/APIResponsesTypes'

import {isToday} from '../../../utils/isToday'

const ExploreEventsItem: FunctionComponent<{eventCard: Events}> = ({eventCard}) => {
  const EventCardRef: any = useRef<HTMLDivElement>()

  const [lazyImage, setLazyImage] = useState<string>('lazy-img')

  const isVisible = useOnScreen<HTMLDivElement>(EventCardRef, 0.1)

  const groupImage = getLazyUrl(
    'https://res.cloudinary.com/djftxayyc/image/upload/c_scale,w_100/v1665257399/',
    eventCard.groupAvi,
  )
  const eventImage = getLazyUrl(
    'https://res.cloudinary.com/djftxayyc/image/upload/c_scale,w_100/v1665257399/',
    eventCard.flyer,
  )

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (lazyImage.length > 0) {
      timer = setTimeout(() => (EventCardRef.current.style.backgroundImage = `url(${eventCard.flyer})`))
    }

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (lazyImage.length > 0 && isVisible) setLazyImage('')

    return () => {}
  }, [lazyImage, isVisible])

  return (
    <div
      className={`EventCard ${lazyImage.length > 0 ? lazyImage : 'visible'}`}
      ref={EventCardRef}
      style={{backgroundImage: `url(${eventImage})`}}>
      <div className='EventCard-filter'></div>
      <div className='EventCard-info'>
        <div className='EventCard-date'>
          <div className='EventCard-dotw'>{isToday(eventCard.startUtc)}</div>
        </div>
        <div>
          <div className='EventCard-name'>{eventCard.name}</div>
          <div className='EventCard-location'>{eventCard.groupName}</div>
        </div>
      </div>
      <img className='EventCard-organizer' src={groupImage || ''} alt={eventCard.groupName} />
    </div>
  )
}
export default ExploreEventsItem
