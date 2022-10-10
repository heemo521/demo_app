import React, {FunctionComponent} from 'react'
import ExploreEvents from './ExploreEvents'
import ExploreNav from './ExploreNav'
import {Events} from './Types/APIResponsesTypes'

const ExploreBody: FunctionComponent<{eventList: Events[]}> = ({eventList}) => (
  <div className='Explore-body'>
    <div className='Explore-body-main'>
      <ExploreNav />
      <ExploreEvents eventList={eventList} />
    </div>
  </div>
)

export default ExploreBody
