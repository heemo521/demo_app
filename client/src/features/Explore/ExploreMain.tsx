import React, {FunctionComponent, useEffect, useState} from 'react'
import {useGeolocated} from 'react-geolocated'
import axios from 'axios'
import ExploreLoading from './Components/ExploreLoading'
import ExploreCover from './Components/ExploreCover'
import ExploreBody from './Components/ExploreBody'
import {Events} from './Components/Types/APIResponsesTypes'
import BackButton from '../../components/ui/BackButton'
export interface IExploreMainProps {
  city: string | null
  c: string
  t: string
  p: number
  setSearchParams: (value: string) => void
}

const ExploreMain: FunctionComponent<IExploreMainProps> = props => {
  const {city, c, t, p} = props

  const [eventList, setEventList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const {coords, isGeolocationAvailable, isGeolocationEnabled} = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })

  useEffect(() => {
    if (city === 'near' && eventList.length === 0) {
      if (!isGeolocationAvailable) {
        alert('Your browser does not support geolocation')
      } else if (!isGeolocationEnabled) {
        alert('Geolocation is not enabled')
      }
      const [lat, lng] = [coords?.latitude, coords?.longitude]

      void getCityEvents(lat, lng)
      return
    }
    void getCityEvents()
  }, [city, coords])

  const getCityEvents = (lat = 0, lng = 0) =>
    axios(`http://localhost:4000/v1/events/?category=popular&t=${t}&p=${p}&city=${city}&lat=${lat}&lng=${lng}`)
      .then(res => {
        const {success, message, data} = res.data

        if (!success) throw new Error('failed to get data ' + message)

        // Need to order the events by date... (the data should be for the next 7 days)
        // Create date object for each event first and then sort...
        // read a comment about how creating Date in side the sort can negatively affect performance
        // So needs some testing
        const sortedEvents = data
          .map((event: Events) => {
            event.date = new Date(event.startUtc)
            return event
          })
          .sort((a: Events, b: Events) => a.date.getTime() - b.date.getTime())

        setEventList(sortedEvents)
        setIsLoaded(data.length > 0)
      })
      .catch(err => {
        alert(err.message)
      })

  // load the loading image and using a state that will be update inside the
  return (
    <>
      <ExploreLoading isLoaded={isLoaded} />
      <div className={`Explore ${eventList.length > 0 ? 'Explore-fadeInAnimation' : ''}`}>
        <BackButton backURL={'/explore?c=popular&t=week&p=1&city='} />
        <ExploreCover />
        <ExploreBody eventList={eventList} {...props} />
      </div>
    </>
  )
}

export default ExploreMain
