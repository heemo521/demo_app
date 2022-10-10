import axios from 'axios'
import React, {FunctionComponent, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

interface ICitySelector {
  city: string
  key: string
}

const CitySelectorBody: FunctionComponent = () => {
  const [citiesList, setCitiesList] = useState([] as ICitySelector[])

  useEffect(() => {
    // axios('https://localhost:5000/v1/events/cities')
    //   .then(res => {
    //     console.log(res.data)
    //     // TODO: set the list when received cities

    //     // setCitiesList(res.data)
    //   })
    //   .catch(err => console.error(err))

    const Cities: ICitySelector[] = [
      {city: 'new york', key: 'nyc'},
      {city: 'miami', key: 'mia'},
      {city: 'los angeles', key: 'la'},
      {city: 'near me', key: 'near'},
    ]

    setCitiesList(Cities)
  }, [])

  return (
    <div className='CitySelector-Body'>
      <div className='CitySelector-prompt'>Where are you looking for experiences?</div>
      <ul className='CitySelector-cities'>
        {citiesList.map((city: ICitySelector, i: number) => (
          <li className='city gold' key={i}>
            <Link to={'/explore?c=popular&t=week&p=1&city=' + city.key}>
              <span>{city.city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CitySelectorBody
