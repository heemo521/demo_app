import React, {useState, useEffect, FunctionComponent} from 'react'
import {Loading_Msgs} from './utils/loadMessage'
import ProgressBar from '@ramonak/react-progress-bar'

const ExploreLoading: FunctionComponent<{}> = () => {
  const randomNumber = Math.floor(Math.random() * Loading_Msgs.length)
  const [selectedMsg, setSelectedMsg] = useState(Loading_Msgs[0])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setSelectedMsg(Loading_Msgs[randomNumber])
  }, [])

  useEffect(() => {
    if (counter <= 100) {
      setTimeout(() => {
        setCounter(counter + 1)
      }, 100)
    }
  }, [counter])
  // Confetti here
  return (
    <>
      <div className='Explore-loading'>
        <div>{selectedMsg}</div>
        <ProgressBar
          completed={counter}
          isLabelVisible={false}
          height='8px'
          bgColor='#FFCC00'
          borderRadius='10px'
          baseBgColor='#000000'
          width='300px'
          className='ProgressBar'
          animateOnRender
        />
      </div>
    </>
  )
}

export default ExploreLoading
