const express = require('express')
const seed = express.Router()
const PlasticType = require('../models/plasticType.js')

// credit: acme plastics.com
seed.get('/', (req, res) => {
  PlasticType.create([
    {
      recycleNumber: '1',  //-------- ONE
      recycleCode: 'PETE',
      plasticName: 'polyethylene terephthalate',
      generalDescription: 'General description 1',
      canRecycle: 'Yes',
      recycleInfoOne: 'Most areas recycle #1',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'soft drink bottles, mineral water containers, and fruit juice containers, and cooking oil containers',
      recycledExamples: 'containers, carpet, furniture',
      recycleImages: []
    },
    {
      recycleNumber: '2',    //-------- TWO
      recycleCode: 'HDPE',
      plasticName: 'high-density polyethylene',
      generalDescription: 'General description 2',
      canRecycle: 'Yes',
      recycleInfoOne: 'Most areas recycle #2',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'cleaning agents, milk, detergents, washing soap',
      recycledExamples: 'pipes, oil bottles, pens, detergent bottles',
      recycleImages: []
    },
    {
      recycleNumber: '3',    //-------- THREE
      recycleCode: 'V',
      plasticName: 'polyvinyl chloride',
      generalDescription: 'General description 3',
      canRecycle: 'No',
      recycleInfoOne: 'This type of plastic is rarely recycled',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'bubble foils, trays for sweets and fruit',
      recycledExamples: 'speed bumps, roadway gutters, cables',
      recycleImages: []
    },
    {
      recycleNumber: '4',    //-------- FOUR
      recycleCode: 'LDPE',
      plasticName: 'low-density polyethylene',
      generalDescription: 'General description 4',
      canRecycle: 'No',
      recycleInfoOne: 'This type of plastic is not usually recycled',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'shopping bags, highly-resistant sacks, crushed bottles',
      recycledExamples: 'floor tiles, shipping envelopes',
      recycleImages: []
    },
    {
      recycleNumber: '5',    //-------- FIVE
      recycleCode: 'PP',
      plasticName: 'polypropylene plastic',
      generalDescription: 'General description 5',
      canRecycle: 'Maybe',
      recycleInfoOne: 'Increasingly being accepted in curbside recycling programs',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'furniture, luggage, toys',
      recycledExamples: 'ketchup bottles, medicine bottles',
      recycleImages: []
    },
    {
      recycleNumber: '6',    //-------- SIX
      recycleCode: 'PS',
      plasticName: 'polystyrene',
      generalDescription: 'General description 6',
      canRecycle: 'Probably not',
      recycleInfoOne: 'This type of plastic is not usually recycled',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'refrigerator trays, cosmetic bags, costume jewelry, CD cases',
      recycledExamples: 'make egg cartons, take-out containers, rulers',
      recycleImages: []
    },
    {
      recycleNumber: '7',    //-------- SEVEN
      recycleCode: 'OTHER',
      plasticName: 'acrylic, polycarbonate, polylactic fibers',
      generalDescription: 'General description 7',
      canRecycle: 'Maybe',
      recycleInfoOne: 'Requires more research on your part',
      recycleInfoTwo: 'Contact your local recycling company for more info',
      productExamples: 'fiberglass, nylon, acrylic',
      recycledExamples: '',
      recycleImages: []
    }
  ], (err, data) => {
    if(err) {
      console.error(err.message)
    }
    res.send(data)
  })
})

module.exports = seed
