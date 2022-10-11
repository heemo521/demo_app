import mongoose from 'mongoose'
import reverse from 'reverse-geocode'

export const eventsCollection = mongoose.connection.collection('events')

export const getAllCities = async () => {
  const result = await eventsCollection.distinct('location')

  const cities = result.map(city => {
    const [lng, lat] = city.coordinates
    return reverse.lookup(lat, lng, 'us').city
  })

  return cities
}

export const groupByCityEvents = async () => {
  console.log('getting data')
  // const result = await eventsCollection.distinct('location')

  // const cities = result.map(city => {
  //   const [lng, lat] = city.coordinates

  //   const cityName = reverse.lookup(lat, lng, 'us')

  //   return cityName.city
  // })

  return null
}
