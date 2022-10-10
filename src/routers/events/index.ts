import {Router} from 'express'
import controller from '../../controllers/events'

const router = Router()

router.route('/cities').get(controller.getAllCities)

router.route('/').get(controller.getCityEvents)
router.route('/all').get(controller.getAllEvents)

export default router
