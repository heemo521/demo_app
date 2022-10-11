import {Request, Response} from 'express'
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

    // console.log(category, timeFrame, page, latitude, longitude, city)

    // if (!timeFrame || !city) throw new Error('Please provide a city and or time frame')

    // if (city === 'near') {
    //   if (!latitude || !longitude) throw new Error('Allow location coordinates')

    //   const cityEvents = await groupByCityEvents()

    //   return res.send({
    //     success: true,
    //     message: 'Success! Here are events near you',
    //     data: cityEvents,
    //   })
    // }

    const cityEvents = await groupByCityEvents()

    res.send({
      success: true,
      message: 'Here are city events',
      data: cityEvents,
    })
  } catch (err) {
    res.status(404).send({
      success: false,
      message: err,
    })
  }
}

export default {
  getCityList,
  getCityEvents,
}
