import React, {FunctionComponent, useEffect, useState} from 'react'
import axios from 'axios'
import ExploreLoading from './Components/ExploreLoading'
import ExploreCover from './Components/ExploreCover'
import ExploreBody from './Components/ExploreBody'
export interface IExploreMainProps {
  city: string | null
  c: string
  t: string
  p: number
}

const ExploreMain: FunctionComponent<IExploreMainProps> = ({city, c, t, p}) => {
  const [eventList, setEventList] = useState([])
  const [coords, setCoords] = useState([] as number[])
  useEffect(() => {
    if (city === 'near') {
      // TODO: get coordinates and set coords
    }
    void getCityEvents()
  }, [])

  const getCityEvents = async () => {
    const [lat, lng] = coords

    console.log('hello getting city events')

    axios(`http://localhost:5000/v1/events/?category=popular&t=${t}&p=${p}&city=${city}&lat=${lat}&lng=${lng}`)
  }

  // load the loading image and using a state that will be update inside the
  return (
    <div style={{color: 'white', fontSize: '2rem'}}>
      <ExploreLoading />
      <ExploreCover />
      <ExploreBody />
    </div>
  )
}

export default ExploreMain
