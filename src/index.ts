import 'manual-node-env'
import { config } from 'dotenv'
config()

console.log('---', new Date().toString())

import './db'
import './server'
import './_lab'
