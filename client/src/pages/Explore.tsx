import React, {FunctionComponent, useEffect} from 'react'
import CitySelector from 'pages/CitySelector'
import ExploreMain from '../features/Explore/ExploreMain'
import {useSearchParams} from 'react-router-dom'

const Explore: FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  //posh.vip/explore?c=popular&t=week&p=1&city=
  //posh.vip/explore?c=popular&t=week&p=1&city=la
  const city = searchParams.get('city') || null
  const c = 'popular' || searchParams.get('c')
  const t = searchParams.get('t') || 'week'
  const p = Number(searchParams.get('p')) || 1

  useEffect(() => {
    if (!city) {
      setSearchParams('?c=popular&t=week&p=1&city=')
      //navigate to CitySelector Page
    } else {
      setSearchParams(`?c=${c}&t=${t}&p=${p}&city=${city}`)
    }
  }, [])

  return city ? <ExploreMain city={city} c={c} t={t} p={p} /> : <CitySelector />
}

export default Explore
