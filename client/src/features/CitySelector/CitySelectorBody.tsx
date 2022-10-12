import axios from 'axios'
import React, {FunctionComponent, useEffect, useState} from 'react'
import {Link, Navigate} from 'react-router-dom'

interface ICitySelector {
  city: string
  key: string
  className: string
}

const CitySelectorBody: FunctionComponent = () => {
  const [citiesList, setCitiesList] = useState([] as ICitySelector[])

  useEffect(() => {
    // Hard code Cities
    const Cities: ICitySelector[] = [
      {city: '🗽 New York', key: 'nyc', className: 'gold'},
      {city: '🌴 Miami', key: 'mia', className: 'gold'},
      {city: '☀️ Los Angeles', key: 'la', className: 'gold'},
      {city: '📍 Near Me', key: 'near', className: ''},
    ]
    setCitiesList(Cities)

    // *BONUS* Dynamic city list rendering => this fetch will get the list of cities via reverse geolocation using coordinates in the db
    // At the moment, the screen will load twice because the fetching happens after the component is mounted
    // therefore, the fetching needs to happen in the parent scope and passed down when loaded
    //   axios.get('http://localhost:5000/v1/events/cities').then(res => {
    //     setCitiesList(res.data.data.reverse())
    //   })
  }, [])

  return (
    <div className='CitySelector-Body'>
      <div className='CitySelector-prompt'>Where are you looking for experiences?</div>
      <ul className='CitySelector-cities'>
        {citiesList.map((city: ICitySelector, i: number) => (
          <Link to={'/explore?c=popular&t=week&p=1&city=' + city.key} className={`city ${city.className}`} key={i}>
            <li>{city.city}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default CitySelectorBody
