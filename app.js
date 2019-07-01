const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db').db

app.use(cors({ origin: '*' }))
app.use(bodyParser.json())

require('./app/routes')(app)

app.listen(3210, () => {
  console.log('\x1b[0m', 'Backend escutando e enviando na porta 3210')
})
