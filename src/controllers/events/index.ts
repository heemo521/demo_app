import {Request, Response} from 'express'
import reverse from 'reverse-geocode'
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

    console.log(category, timeFrame, page, latitude, longitude, city)

    let selectedCity = city

    if (!timeFrame || !city) throw new Error('Please provide a city and/or time frame')

    if (city === 'near') {
      if (!latitude || !longitude) throw new Error('Allow location coordinates to find events near you')

      selectedCity = reverse.lookup(Number(latitude), Number(longitude), 'us').city
    }

    const cityEvents = await groupByCityEvents(selectedCity, timeFrame, page)

    res.send({
      success: true,
      message: 'Success! Here are events at city: ' + city,
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
