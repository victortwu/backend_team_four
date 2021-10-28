const express = require('express')
const factoid = express.Router()
const Factoids = require('../models/factoids.js')


// seed route

factoid.get('/seed', (req, res) => {
  Factoids.create([
    { factoid: 'Recycling 10 plastic bottles saves enough energy to power a laptop for more than 25 hours, according to the EPA.' },

    { factoid: 'Only 8% of discarded plastics were recycled in 2017, according to the EPA.' },

    { factoid: 'According to the National Waste & Recycling Association, 25% of what ends up in recycling bins is contaminated and must be thrown out.' },

    { factoid: 'Plastic accounts for roughly 12% of the total municipal solid waste in the US.' },

    { factoid: 'Plastic takes hundreds of years to decompose' },

    { factoid: 'Only 9% of plastic is recycled, according to National Geographic.' },

    { factoid: 'According to a United Nations report, more than 220 million tons of plastic are produced each year.' },

    { factoid: 'According to Statista, 92% of 18-34 year olds recycle in the US.' },

    { factoid: 'Americans throw out 2.5 million plastic bottles every hour, according to Recycle Across America.' },

  ],(err, data) => {
    if(err) {
      console.error(err.message)
    }
    res.send(data)
  })
})


factoid.get('/', (req, res)=> {
  Factoids.find({}, (err, foundFactoids) => {
    if(err){
      res.status(400).json(err)
    } else {
      res.status(200).json(foundFactoids)
    }
  })
})


factoid.post('/', (req, res)=> {
  Factoids.create(req.body, (err,createdFactoid) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(createdFactoid)
    }
  })
})

factoid.put('/:id', (req, res)=> {
  Factoids.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFactoid)=> {
    if(err) {
      res.status(400).json(err)
    } else {
      res.status(200).json('Factoid updated successfully')
    }
  })
})

factoid.delete('/:id', (req, res) => {
  Factoids.findByIdAndDelete(req.params.id, (err, deletedData)=> {
    if(err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(`${deletedData} has been successfully deleted.`)
    }
  })
})



module.exports = factoid
