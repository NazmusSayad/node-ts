import env from 'cli-node-env'
import { config } from 'dotenv'
config()

console.log('---', new Date().toString())
if (env.isDev) console.clear()

import './db'
import './server'

try {
  require('./_lab')
} catch (err) {
  console.error(err)
}
