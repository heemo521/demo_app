import React, {FunctionComponent, useEffect} from 'react'
import CitySelector from 'pages/CitySelector'
import {useSearchParams} from 'react-router-dom'

const Explore: FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  //posh.vip/explore?c=popular&t=week&p=1&city=
  //posh.vip/explore?c=popular&t=week&p=1&city=la
  const city = searchParams.get('city')
  const c = searchParams.get('c')
  const t = searchParams.get('t')
  const p = searchParams.get('p')

  useEffect(() => {
    if (!city) {
      setSearchParams('?c=popular&t=week&p=1&city=')
      //navigate to CitySelector Page
    } else {
    }
    console.log('city name is ' + city)
    console.log('c name is' + c)
    console.log('t name is ' + t)
    console.log('p name is' + p)
  }, [])

  //   if (!city) return null // navigate to cityselector
  return city ? <div style={{color: 'white', fontSize: '2rem'}}>Explore</div> : <CitySelector />
}

export default Explore
