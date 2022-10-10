import React, {FunctionComponent, useEffect} from 'react'
import CitySelector from 'pages/CitySelector'
import ExploreMain from '../features/Explore/ExploreMain'
import {useSearchParams} from 'react-router-dom'

const Explore: FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const city = searchParams.get('city') || null
  const c = searchParams.get('c') === 'popular' ? 'popular' : 'popular'
  const t = searchParams.get('t') === 'day' ? 'day' : 'week'
  const p = Number(searchParams.get('p')) || 1

  useEffect(() => {
    console.log('HEre is the queries' + ' t' + t + 'p' + p + 'c' + c + 'city' + city)
    if (!city) {
      setSearchParams('?c=popular&t=week&p=1&city=')
    } else {
      setSearchParams(`?c=${c}&t=${t}&p=${p}&city=${city}`)
    }
  }, [])

  return city ? <ExploreMain city={city} c={c} t={t} p={p} /> : <CitySelector />
}

export default Explore
