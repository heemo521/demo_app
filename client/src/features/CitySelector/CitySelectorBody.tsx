import * as React from 'react'

interface ICitySelectorBodyProps {}

const CitySelectorBody: React.FunctionComponent<ICitySelectorBodyProps> = props => {
  return (
    <div className='CitySelector-Body'>
      <div>Where are you looking for experiences?</div>
      <li>
        <ul>City</ul>
        <ul>City</ul>
        <ul>City</ul>
        <ul>City</ul>
      </li>
    </div>
  )
}

export default CitySelectorBody
