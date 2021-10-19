const express = require('express')
const location = express.Router()
const axios = require('axios')

const locationEarth911URL = process.env.LOCATIONS_EARTHURL
const upcEarthApiKey = '&api_gkey=' + process.env.RECYCLE_APIKEY

location.get('/:latitude/:longitude/:materials', async(req, res) => {
      try{

        const latitude = req.params.location
        const longitude = req.params.longitude
        const materials = req.params.materials

        axios.get(upcEarth911URL + `latitude=${latitude}&longitude=${longitude}` + upcEarthApiKey)
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