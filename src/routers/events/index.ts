import {Router} from 'express'
import {getCityList, getCityEvents} from '../../controllers/events'
import {eventsCollection} from '../../models/events'

const router = Router()

router.route('/cities').get(getCityList)

router.get('/test', getCityEvents)

router.route('/').get(getCityEvents)

export default router

// router.route('/test').get(async (req, res) => {
//   console.log('hellooooo')
//   const data = await eventsCollection.aggregate()
//   console.log('Getting ' + data)

//   res.send({
//     success: true,
//     data: data,
//   })
// })
