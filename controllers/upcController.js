const express = require('express')
const upc = express.Router()
const axios = require('axios')

const upcBaseURL = process.env.UPC_BASEURL
const upcApiKey = '/?apikey=' + process.env.UPC_APIKEY


upc.get('/:code', async(req, res) => {
      try{

        const query = req.params.code

        axios.get(upcBaseURL + query + upcApiKey)
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
