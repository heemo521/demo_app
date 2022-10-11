import mongoose from 'mongoose'
import reverse from 'reverse-geocode'

export const eventsCollection = mongoose.connection.collection('events')

export const getAllCities = async () => {
  const result = await eventsCollection.distinct('location')

  return result.map(city => {
    const [lng, lat] = city.coordinates
    const cityData = reverse.lookup(lat, lng, 'us')
    return cityData.city
  })
}

export const groupByCityEvents = async (coordinates: number[]) => {
  return eventsCollection.find({}).toArray()
  // const result = await eventsCollection.find({
  //   'location.coordinates': {$geoWithin: {$centerSphere: [coordinates, 500 / 6778.1]}},
  // })

  // db.collection.find({
  //   $and: [
  //     {location: {$geoWithin: {$centerSphere: [[72.50325, 23.01222], 500 / 6378.1]}}},
  //     {location: {$geoWithin: {$centerSphere: [[72.7788, 23.8787], 500 / 6378.1]}}},
  //   ],
  // })

  // console.log(result)

  // return result
}
