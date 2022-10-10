import React, {FunctionComponent, useEffect} from 'react'
import CitySelector from 'pages/CitySelector'
import ExploreMain from '../features/Explore/ExploreMain'
import {useSearchParams} from 'react-router-dom'

const Explore: FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  //setSearchParams: SetURLSearchParams
  const city = searchParams.get('city') || null
  const c = searchParams.get('c') === 'popular' ? 'popular' : 'popular'
  const t = searchParams.get('t') === 'day' ? 'day' : 'week'
  const p = Number(searchParams.get('p')) || 1

  const props = {city, c, t, p, setSearchParams}

  useEffect(() => {
    console.log('Here is the queries' + ' t' + t + 'p' + p + 'c' + c + 'city' + city)
    if (!city) {
      setSearchParams('?c=popular&t=week&p=1&city=')
    } else {
      setSearchParams(`?c=${c}&t=${t}&p=${p}&city=${city}`)
    }
  }, [])

  return city ? <ExploreMain {...props} /> : <CitySelector />
}

export default Explore
