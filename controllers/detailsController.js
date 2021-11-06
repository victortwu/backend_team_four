const express = require('express')
const details = express.Router()
const axios = require('axios')



const locDetailsURL = process.env.LOC_DETAILS_EARTHURL
const upcEarthApiKey = 'api_key=' + process.env.RECYCLE_APIKEY

details.get('/:query', async(req, res) => {
  try{
  
    axios.get(`${locDetailsURL}${upcEarthApiKey}${req.params.query}`)
    .then(res => {
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

module.exports = details
