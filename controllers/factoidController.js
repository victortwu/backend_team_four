const express = require('express')
const factoid = express.Router()
const Factoids = require('../models/factoids.js')


// seed route

factoid.get('/seed', (req, res) => {
  Factoids.create([
    { factoids: [
      'Recycling 10 plastic bottles saves enough energy to power a laptop for more than 25 hours, according to the EPA.',
      'Only 8% of discarded plastics were recycled in 2017, according to the EPA.',
      'According to the National Waste & Recycling Association, 25% of what ends up in recycling bins is contaminated and must be thrown out.',
      'Plastic accounts for roughly 12% of the total municipal solid waste in the US.',
      'Plastic takes hundreds of years to decompose',
      'Only 9% of plastic is recycled, according to National Geographic.',
      'According to a United Nations report, more than 220 million tons of plastic are produced each year.',
      'According to Statista, 92% of 18-34 year olds recycle in the US.',
      'Americans throw out 2.5 million plastic bottles every hour, according to Recycle Across America.',
    ] }
  ],(err, data) => {
    if(err) {
      console.error(err.message)
    }
    res.send(data)
  })
})


factoid.get('/', (req, res)=> {
  console.log('hit get route')
  Factoids.find({}, (err, foundFactoids) => {
    if(err){
      res.status(400).json(err)
    } else {
      res.status(200).json(foundFactoids)
    }
  })
})

module.exports = factoid
