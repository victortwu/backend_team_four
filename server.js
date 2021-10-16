require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')
const CloudmersiveBarcodeapiClient = require('cloudmersive-barcodeapi-client')
const defaultClient = CloudmersiveBarcodeapiClient.ApiClient.instance
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

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


// testing cloud immersive ===================================


//Configure API key authorization: Apikey

const Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = process.env.CLOUDMERSIVE_APIKEY;
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
Apikey.apiKeyPrefix = 'Token';

const apiInstance = new CloudmersiveBarcodeapiClient.BarcodeScanApi();

//const imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


const callback = function(error, data, response) {
  if (error) {
    console.log('----- Heres an error:')
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
// apiInstance.barcodeScanImage(imageFile, callback);
app.post('/scan', upload.single('imageFile'), (req, res, next) =>  {

  const imageFile = req.file
  console.log('Came through........', imageFile)

  apiInstance.barcodeScanImage(imageFile, callback);
  console.log('Is this the data trying to come back?????? ', callback)
  // res.send(callback)
})


// testing recycle place api=====================================================



//===========================================================

// routes


const userController = require('./controllers/userController')
app.use('/users', userController)

const plasticTypeController = require('./controllers/plasticTypeController')
app.use('/plastics', plasticTypeController)

const upcController = require('./controllers/upcController')
app.use('/upc', upcController)

const plasticTypeSeedData = require('./controllers/plasticTypeSeedData')
app.use('/seed', plasticTypeSeedData)




app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}...`)
})
