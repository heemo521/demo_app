import axios from 'axios'
import React, {FunctionComponent, useEffect, useState} from 'react'
import {Link, Navigate} from 'react-router-dom'

const Cities = {
  Brooklyn: ['nyc', 'gold'],
  Miami: ['mia', 'gold'],
  'Los Angeles': ['la', 'gold'],
  'Near Me': ['near', ''],
}

const CitySelectorBody: FunctionComponent = () => {
  const [citiesList, setCitiesList] = useState([] as string[])
  // Dynamic city list rendering
  useEffect(() => {
    axios.get('http://localhost:5000/v1/events/cities').then(res => {
      setCitiesList(res.data.data.reverse())
    })
    // Hard code
    // const Cities: ICitySelector[] = [
    //   {city: '🗽 New York', key: 'nyc', className: 'gold'},
    //   {city: '🌴 Miami', key: 'mia', className: 'gold'},
    //   {city: '☀️ Los Angeles', key: 'la', className: 'gold'},
    //   {city: '📍 Near Me', key: 'near', className: ''},
    // ]
    // setCitiesList(Cities)
  }, [])

  return (
    <div className='CitySelector-Body'>
      <div className='CitySelector-prompt'>Where are you looking for experiences?</div>
      <ul className='CitySelector-cities'>
        {[...citiesList, 'Near Me'].map((city: string, i: number) => (
          <Link
            to={'/explore?c=popular&t=week&p=1&city=' + Cities[city][0]}
            className={`city ${Cities[city][1]}`}
            key={i}>
            <li>{city}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default CitySelectorBody
