import React from 'react'

import Confetti from '../components/utils/Confetti'

interface ICitySelectorProps {}

const CitySelector: React.FunctionComponent<ICitySelectorProps> = props => {
  return (
    <div className='CitySelector'>
      <Confetti />
    </div>
  )
}

export default CitySelector
