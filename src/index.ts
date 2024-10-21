import env from 'cli-node-env'
import { config } from 'dotenv'
config()

console.log('---', new Date().toString())
if (env.isDev) console.clear()

import './db'
import './server'

try {
  if (env.isDev) require('./__lab__')
} catch (err) {
  console.error(err)
}
