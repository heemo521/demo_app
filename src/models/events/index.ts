import mongoose from 'mongoose'
import {EventSchema} from './db'

export const eventsCollection = mongoose.connection.collection('events')

export const getAllEvents = () => {
  return eventsCollection.find({}).toArray()
}

export const getAllCities = async () => {
  return EventSchema.aggregate.sortByCount('name')
}
