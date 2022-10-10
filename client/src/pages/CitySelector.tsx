import * as React from 'react'
import {Size, useWindowSize} from '../hooks/useWindowSize'
import Confetti from 'react-confetti'

interface ICitySelectorProps {}

const CitySelector: React.FunctionComponent<ICitySelectorProps> = props => {
  const {width, height}: Size = useWindowSize()

  React.useEffect(() => {
    console.log(width, height)
  })
  return (
    <div className='CitySelector'>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={150}
        colors={['#FFCC00', '#E0B400', '#e0b3007a', '#e0b3007d']}
        wind={0.05}
        gravity={0.08}
        opacity={0.75}
      />
    </div>
  )
}

export default CitySelector
