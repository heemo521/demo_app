import {Request, Response} from 'express'
import {getAll} from '../../models/events'

export const getCityList = async (req: Request, res: Response) => {
  const events = await getAll()
  res.send({
    success: true,
    message: 'Here are list of cities ',
    data: events,
  })
}

export const getCityEvents = async (req: Request, res: Response) => {
  try {
    //    /?category=popular&t=${t}&p=${p}&city=${city}&lat=${lat}&lng=${lng}
    const events = await getAll()
    res.send({
      success: true,
      message: 'Here are list of cities ',
      data: events,
    })
    return
    const {c: category, t: timeFrame, p: page, city, lat: latitude, lon: longitude} = req.query

    console.log(category, timeFrame, page, latitude, longitude, city)
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
  getCityEvents,
}