import mongoose from 'mongoose'
import {resolve} from 'path'

export const eventsCollection = mongoose.connection.collection('events')

export const getAllEvents = () => {
  return eventsCollection.find({}).toArray()
}

export const getAllCities = async () => {}
