require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT

// database setup
const mongoose = require('mongoose')

const mongoURI = process.env.MONGODBURI

const db = mongoose.connection

mongoose.connect(mongoURI, {
  // useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Plastics DB connected...')
})

db.on('error', (err)=> { console.log('ERROR: ', err)})
db.on('connected', ()=> { console.log('CONNECTED TO MONGO')})
db.on('disconnected', ()=> {console.log('disconnected...')})



app.get('/test', (req, res)=> {
  res.send('Hello there')
})

app.get('/test/:name', (req, res)=> {
  console.log(req.params)
  res.send(`My name is ${req.params.name}.`)
})

app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}...`)
})
