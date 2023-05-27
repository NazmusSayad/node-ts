import express from 'express'
import extrass from 'extrass'
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
    max: 1000,
    windowMs: 60 * 60 * 1000 /* 1 Hour */,
    message: {
      status: 'fail',
      message: 'Too many requests, please try again later',
    },
  })
)

// Pasrer
app.use(express.json({ limit: '8kb' }))

// XXS
app.use(mongoSanitize())
app.use(xss())

// Router
app.use(router)

// Finisher
extrass(app, { ping: '/ping' })
export default app
