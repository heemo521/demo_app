import React from 'react'
import Confetti from '../components/ui/Confetti'
import CitySelectorBody from 'features/CitySelector/CitySelectorBody'

const CitySelector: React.FunctionComponent = () => {
  return (
    <div className='CitySelector'>
      <Confetti stop={false} />
      <CitySelectorBody />
    </div>
  )
}

export default CitySelector
