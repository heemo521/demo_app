import React, {FunctionComponent} from 'react'
import ExploreEvents from './ExploreEvents'
import ExploreNav from './ExploreNav'
import {Events} from './Types/APIResponsesTypes'

const ExploreBody: FunctionComponent<{eventList: Events[]; t: string}> = ({eventList, t}) => (
  <div className='Explore-body'>
    <div className='Explore-body-main'>
      <ExploreNav t={t} />
      <ExploreEvents eventList={eventList} />
    </div>
  </div>
)

export default ExploreBody
