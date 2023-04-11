import express from 'express'
import expressMaster from 'express-master'
import cors from 'cors'
import xss from 'xss-clean'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import mongoSanitize from 'express-mongo-sanitize'
import router from './router'
const app = express()

// Safety
app.use(cors({ origin: /.*/ }))
app.use(helmet())
app.use(
  rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 1000,
    message: {
      status: 'fail',
      message:
        'Too many requests from this IP, please try again after a deep sleep',
    },
  })
)

// Pasrer
app.use(express.json({ limit: '8kb' }))

// XXS
app.use(mongoSanitize())
app.use(xss())

// Routes
app.use(router)

// Utils
expressMaster(app, { ping: '/ping' })

export default app
