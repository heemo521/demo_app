import express from 'express'

import {json, urlencoded} from 'body-parser'
import cors from 'cors'

import router from './src/routers/events'

const app = express()
app.use(cors())

app.use(
  '/v1/events',
  (req, res, next) => {
    console.log('Request incoming')
    next()
  },
  router,
)

app.use(cors())
app.use(json())
app.use(urlencoded({extended: true}))

export default app
