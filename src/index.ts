import 'manual-node-env'
import { config } from 'dotenv'
config()

console.log('---', new Date().toString())

import './database'
import './server'
