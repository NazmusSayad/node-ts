import mongoose from 'mongoose'
import env from './env'
mongoose.set('strictQuery', false)

const uri = env.DB_URL.replace('<password>', env.DB_PASS)
mongoose
  .connect(uri)
  .then(() => {
    console.log('>>>', 'MongoDB connected successfully...')
  })
  .catch(() => {
    console.error('!!!', 'MongoDB connection failed...')
  })
