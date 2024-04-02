import express from 'express'
import { initController } from './controllers'
import bodyParser from 'body-parser'

require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
)

// Set up routes
initController(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
