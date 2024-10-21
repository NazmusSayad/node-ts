import express from 'express'
import { createExtrass } from 'extrass'
import cors from 'cors'
import morgan from 'morgan'
// @ts-ignore
import xss from 'xss-clean'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import router from './router'
const app = express()
const extrass = createExtrass({
  ping: '/ping',
})

// Safety
app.use(cors({ origin: /.*/ }))
app.use(morgan('dev'))
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
app.use(xss())

// Router
app.use(router)

// Finisher
extrass.handle(app)
export default app
