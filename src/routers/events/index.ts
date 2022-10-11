import {Router} from 'express'
import {getCityList, getCityEvents} from '../../controllers/events'

const router = Router()

router.get('/cities', getCityList)

router.get('/', getCityEvents)

export default router
