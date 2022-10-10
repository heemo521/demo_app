import React, {FunctionComponent, useEffect, useState} from 'react'
import {useGeolocated} from 'react-geolocated'
import axios from 'axios'
import ExploreLoading from './Components/ExploreLoading'
import ExploreCover from './Components/ExploreCover'
import ExploreBody from './Components/ExploreBody'

import BackButton from '../../components/ui/BackButton'
export interface IExploreMainProps {
  city: string | null
  c: string
  t: string
  p: number
  setSearchParams: Function
}

const ExploreMain: FunctionComponent<IExploreMainProps> = props => {
  const {city, c, t, p} = props

  const [eventList, setEventList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  // const [coords, setCoords] = useState([] as number[])
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

  const getCityEvents = async (lat = 0, lng = 0) =>
    axios(`http://localhost:5000/v1/events/?category=popular&t=${t}&p=${p}&city=${city}&lat=${lat}&lng=${lng}`)
      .then(res => {
        console.log(res)
        const {success, message, data} = res.data
        console.log(message)
        if (!success) throw new Error('failed to get data ' + message)
        setIsLoaded(data.length > 0)
        setEventList(data)
      })
      .catch(err => console.log(err.message))

  // load the loading image and using a state that will be update inside the
  return (
    <div style={{color: 'white', fontSize: '2rem'}}>
      <ExploreLoading isLoaded={isLoaded} />
      <ExploreCover />
      <ExploreBody eventList={eventList} {...props} />
      <BackButton backURL={'/explore?c=popular&t=week&p=1&city='} />
    </div>
  )
}

export default ExploreMain
