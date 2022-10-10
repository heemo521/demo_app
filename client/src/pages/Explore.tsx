import React from 'react'
import {useSearchParams} from 'react-router-dom'

type Props = {}

const Explore = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  //posh.vip/explore?c=popular&t=week&p=1&city=
  //posh.vip/explore?c=popular&t=week&p=1&city=la
  const city = searchParams.get('city')

  const q = searchParams.get('c')
  const src = searchParams.get('t')
  const p = searchParams.get('p')

  if (!city) return null // navigate to cityselector
  return <div>Explore</div>
}

export default Explore
