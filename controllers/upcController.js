const express = require('express')
const upc = express.Router()
const axios = require('axios')

const upcBaseURL = process.env.UPC_BASEURL
const upcEarth911URL = process.env.UPC_EARTHURL
const upcApiKey = '/?apikey=' + process.env.UPC_APIKEY
const upcEarthApiKey = '&api_key=' + process.env.RECYCLE_APIKEY

upc.get('/:code', async(req, res) => {
      try{

        const query = req.params.code

        // axios.get(upcBaseURL + query + upcApiKey)
        axios.get(upcEarth911URL + query + upcEarthApiKey)
        .then(res => {
          console.log(res)
          return res.data
        })
        .then(data => {
          res.status(200).json(data)
        })

      }
      catch(err) {
        console.error(err.message)
      }
  })





module.exports = upc
