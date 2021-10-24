require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT

const session = require('express-session')

// middleware

app.use(express.json())

//cors middleware

// const whitelist = ['http://localhost:3000']
// const corsOptions = {
// 	origin: (origin, callback) => {
// 		if (whitelist.indexOf(origin) !== -1) {
// 			callback(null, true)
// 		} else {
// 			callback(new Error('Not allowed by CORS'))
// 		}
// 	}
// }

app.use(cors())

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




// routes


const userController = require('./controllers/userController')
app.use('/users', userController)

const plasticTypeController = require('./controllers/plasticTypeController')
app.use('/plastics', plasticTypeController)

const upcController = require('./controllers/upcController')
app.use('/upc', upcController)

const locationController = require('./controllers/locationController')
app.use('/locations',locationController)

const plasticTypeSeedData = require('./controllers/plasticTypeSeedData')
app.use('/seed', plasticTypeSeedData)




app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}...`)
})
