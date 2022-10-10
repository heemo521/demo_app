import express from 'express'

import {json, urlencoded} from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())

// GET /
//localhost:5000/v1/events/?category=popular&t=${t}&p=${p}&city=${city}&lat=${lat}&lng=${lng}
app.get('/v1/events', (req, res) => {
  res.send('Hello World!!!')
})

app.use(cors())
app.use(json())
app.use(urlencoded({extended: true}))

export default app
