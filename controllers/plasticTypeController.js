const express = require('express')
const pType = express.Router()
const PlasticType = require('../models/plasticType.js')


// GET ALL route

pType.get('/', (req, res)=> {
  PlasticType.find({}, (err, foundPlastics) => {
    if(err){
      res.status(400).json(err)
    } else {
      res.status(200).json(foundPlastics)
    }
  })
})

// GET specific plastic type

pType.get('/:id', (req, res)=> {
  PlasticType.findById(req.params.id, (err, foundPlastic)=> {
    if(err){
      res.status(400).json(err)
    } else {
      res.status(200).json(foundPlastic)
    }
  })
})


// CREATE

pType.post('/new', (req, res)=> {
  console.log('pType POST...')
  PlasticType.create(req.body, (err, createdPlasticType)=> {
    if(err) {
      res.status(400).json(err)
    } else {
      res.status(201).json(createdPlasticType)
    }
  })
})

// UPDATE

pType.put('/:id', (req, res)=> {
  PlasticType.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPlastic)=> {
    if(err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(`Plastic type ${updatedPlastic.recycleNumber} updated successfully`)
    }
  })
})

// DELETE

pType.delete('/:id', (req, res) => {
  PlasticType.findByIdAndDelete(req.params.id, (err, deletedData)=> {
    if(err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(`${deletedData} has been successfully deleted.`)
    }
  })
})

module.exports = pType
