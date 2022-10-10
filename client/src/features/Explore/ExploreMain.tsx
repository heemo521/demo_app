import React, {FunctionComponent} from 'react'

export interface IExploreMainProps {
  city: string | null
  c: string
  t: string
  p: number
}

const ExploreMain: FunctionComponent<IExploreMainProps> = ({city, c, t, p}) => {
  return (
    <div style={{color: 'white', fontSize: '2rem'}}>
      <div>Explore {city}</div>
      <div>Explore {c}</div>
      <div>Explore {t}</div>
      <div>Explore {p}</div>
    </div>
  )
}

export default ExploreMain
