import React, {FunctionComponent, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

interface ICitySelector {
  city: string
  key: string
}

const CitySelectorBody: FunctionComponent = () => {
  const [citiesList, setCitiesList] = useState([] as ICitySelector[])

  useEffect(() => {
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
