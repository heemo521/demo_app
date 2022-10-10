import React from 'react'
import {Size, useWindowSize} from '../../hooks/useWindowSize'
import ReactConfetti from 'react-confetti'

export default function Confetti() {
  const {width, height}: Size = useWindowSize()

  return (
    <ReactConfetti
      width={width}
      height={height}
      numberOfPieces={150}
      colors={['#FFCC00', '#E0B400', '#e0b3007a', '#e0b3007d']}
      wind={0.05}
      gravity={0.08}
      opacity={0.75}
    />
  )
}
