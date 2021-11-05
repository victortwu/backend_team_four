const express = require('express')
const locations = express.Router()
const axios = require('axios')

const locationEarth911URL = process.env.LOCATIONS_EARTHURL
const upcEarthApiKey = 'api_key=' + process.env.RECYCLE_APIKEY

locations.get('/:latitude/:longitude/', async(req, res) => {
      try{

        const latitude = req.params.latitude
        const longitude = req.params.longitude
        //const materials = req.params.materials

        console.log('PARAM 1: ', latitude)
        console.log('PARAM 2: ', longitude)

        //reconfigured the string, was getting a 404 until I put the api key right after the ? at the end of the base url

        axios.get(`${locationEarth911URL}${upcEarthApiKey}&max_distance=5&latitude=${latitude}&longitude=${longitude}`)
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
