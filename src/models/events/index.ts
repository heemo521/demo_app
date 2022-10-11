import mongoose from 'mongoose'
import reverse from 'reverse-geocode'

export const eventsCollection = mongoose.connection.collection('events')

export const getAllCities = async () => {
  const result = await eventsCollection.distinct('location')

  const cities = result.map(city => {
    const [lng, lat] = city.coordinates
    console.log(lat, lng)
    const cityData = reverse.lookup(lat, lng, 'us')
    console.log(cityData)
    return cityData.city
  })

  return cities
}

export const groupByCityEvents = async (coordinates: number[]) => {
  console.log('getting data')

  const result = await eventsCollection.find({'location.coordinates': coordinates})
  return result
}
