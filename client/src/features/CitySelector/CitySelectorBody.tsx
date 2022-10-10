import React, {FunctionComponent, useEffect, useState} from 'react'

interface ICitySelectorBodyProps {}

const CitySelectorBody: React.FunctionComponent<ICitySelectorBodyProps> = props => {
  const [citiesList, setCitiesList] = useState([] as string[])
  const [selectedCity, setSelectedCity] = useState('')

  useEffect(() => {
    const cities = ['new york', 'miami', 'los angeles', 'near me']
    setCitiesList(cities)
  }, [])

  return (
    <div className='CitySelector-Body'>
      <div>Where are you looking for experiences?</div>
      <li>
        {citiesList.map((city: string, i: number) => (
          <ul className='city_city' key={i}>
            {city}
          </ul>
        ))}
      </li>
    </div>
  )
}

export default CitySelectorBody
