import {Request, Response} from 'express'
import {getAll} from '../../models/event'

export const getCityList = async (req: Request, res: Response) => {
  const events = await getAll()
  res.send({
    success: true,
    message: 'Here are all events',
    data: events,
  })
}

export const getAllEvents = async (req: Request, res: Response) => {
  const events = await getAll()
  res.send({
    success: true,
    message: 'Here are all events',
    data: events,
  })
}

export const getOneCityEvents = async (req: Request, res: Response) => {
  try {
    const {c: category, t: timeFrame, p: page, city, lat: latitude, lon: longitude} = req.query

    if (!timeFrame || !city) throw new Error('Please provide a city and or time frame')

    if (city === 'near') return res.send({location: 'near', latitude, longitude})

    res.send({
      success: true,
      message: `Found events for city '${city}'`,
      data: 'Fetched data',
    })
  } catch (err) {
    res.status(404).send({
      success: false,
      message: 'Not found',
      errMsg: err.message,
    })
  }
}

export default {
  getCityList,
  getAllEvents,
  getOneCityEvents,
}
