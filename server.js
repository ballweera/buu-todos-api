'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

let todos = [
  { title: 'Learn JavaScript', completed: false },
  { title: 'Learn AngularJS', completed: true }
]

app.get('/list', (req, res) => {
  res.json(todos)
})

app.listen(9090, (err) => {
  console.log('Server started at 9090')
})
