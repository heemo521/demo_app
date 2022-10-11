import mongoose from 'mongoose'
import {EventSchema} from './db'

export const eventsCollection = mongoose.connection.collection('events')

export const getAllCities = async () => {
  const result = await eventsCollection.distinct('location')
  console.log('result: ', result)
  return result
}

export const groupByCityEvents = async () => {
  console.log('getting data')
}
