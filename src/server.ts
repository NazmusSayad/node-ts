import app from './app'

const port = process.env.PORT ?? 8000

const server = app.listen(port, () => {
  console.log('>>>', `App running on port "${port}"...`)
})

module.exports = server
