import mongoose from 'mongoose'

const eventsCollection = mongoose.connection.collection('events')

export const getAll = () => {
  return eventsCollection.find({}).toArray()
}
