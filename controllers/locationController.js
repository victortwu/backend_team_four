const express = require('express')
const locations = express.Router()
const axios = require('axios')

const locationEarth911URL = process.env.LOCATIONS_EARTHURL
const upcEarthApiKey = '&api_key=' + process.env.RECYCLE_APIKEY

locations.get('/:latitude/:longitude/:materials', async(req, res) => {
      try{

        const latitude = req.params.latitude
        const longitude = req.params.longitude
        const materials = req.params.materials

        axios.get(locationEarth911URL +`latitude=${latitude}&longitude=${longitude}&max_distance=25`+upcEarthApiKey)
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





module.exports = locations