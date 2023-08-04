import mongoose from 'mongoose'
mongoose.set('strictQuery', false)

const mongoUrl = process.env.DB_URL
const mongoPass = process.env.DB_PASS

if (mongoUrl && mongoPass) {
  const uri = mongoUrl.replace('<password>', mongoPass)
  mongoose
    .connect(uri)
    .then(() => {
      console.log('>>>', 'MongoDB connected successfully...')
    })
    .catch(() => {
      console.error('!!!', 'MongoDB connection failed...')
    })
} else {
  console.error('!!!', 'MongoDB env variable missing...')
}
