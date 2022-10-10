import {Router} from 'express'
import {getCityList, getCityEvents} from '../../controllers/events'

const router = Router()

router.route('/cities').get(getCityList)

router.route('/').get(getCityEvents)

export default router
