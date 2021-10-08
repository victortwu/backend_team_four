require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT

const session = require('express-session')

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

// middleware

app.use(express.json())



// routes

const userController = require('./controllers/userController')
app.use('/users', userController)

const plasticTypeController = require('./controllers/plasticTypeController')
app.use('/plastics', plasticTypeController)



app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}...`)
})
