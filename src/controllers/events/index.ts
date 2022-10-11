import {Request, Response} from 'express'
import {getCoordinates} from './utils/cityMap'

import {getAllCities, groupByCityEvents} from '../../models/events'

// convert the coordinates into city name and send it back

export const getCityList = async (req: Request, res: Response) => {
  try {
    const events = await getAllCities()

    res.send({
      success: true,
      message: 'Here are list of cities ',
      data: events,
    })
  } catch (err) {
    res.status(404).send({
      success: false,
      message: err,
    })
  }
}

export const getCityEvents = async (req: Request, res: Response) => {
  try {
    const {category, t: timeFrame, p: page, city, lat: latitude, lng: longitude} = req.query

    if (!timeFrame || !city) throw new Error('Please provide a city and/or time frame')

    if (city === 'near' && (!latitude || !longitude))
      throw new Error('Allow location coordinates to find events near you')

    const key = String(city)

    let coordinates = getCoordinates(key, Number(latitude), Number(longitude))

    const cityEvents = await groupByCityEvents(coordinates)

    res.send({
      success: true,
      message: 'Success! Here are events at city: ' + city,
      data: cityEvents,
    })
  } catch (err) {
    res.status(404).send({
      success: false,
      message: err.message,
    })
  }
}

export default {
  getCityList,
  getCityEvents,
}
