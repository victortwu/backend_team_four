const express = require('express')
const seed = express.Router()
const PlasticType = require('../models/plasticType.js')


seed.get('/', (req, res) => {
  PlasticType.create([
    {
      recycleNumber: '1',   //-------- ONE
      generalDescription: 'General description 1',
      recycleInfoOptionOne: 'Option One info field 1',
      recycleInfoOptionTwo: 'Option Two info field 1',
      recycleImages: []
    },
    {
      recycleNumber: '2',    //-------- TWO
      generalDescription: 'General description 2',
      recycleInfoOptionOne: 'Option One info field 2',
      recycleInfoOptionTwo: 'Option Two info field 2',
      recycleImages: []
    },
    {
      recycleNumber: '3',    //-------- THREE
      generalDescription: 'General description 3',
      recycleInfoOptionOne: 'Option One info field 3',
      recycleInfoOptionTwo: 'Option Two info field 3',
      recycleImages: []
    },
    {
      recycleNumber: '4',    //-------- FOUR
      generalDescription: 'General description 4',
      recycleInfoOptionOne: 'Option One info field 4',
      recycleInfoOptionTwo: 'Option Two info field 4',
      recycleImages: []
    },
    {
      recycleNumber: '5',    //-------- FIVE
      generalDescription: 'General description 5',
      recycleInfoOptionOne: 'Option One info field 5',
      recycleInfoOptionTwo: 'Option Two info field 5',
      recycleImages: []
    },
    {
      recycleNumber: '6',    //-------- SIX
      generalDescription: 'General description 6',
      recycleInfoOptionOne: 'Option One info field 6',
      recycleInfoOptionTwo: 'Option Two info field 6',
      recycleImages: []
    },
    {
      recycleNumber: '7',    //-------- SEVEN
      generalDescription: 'General description 7',
      recycleInfoOptionOne: 'Option One info field 7',
      recycleInfoOptionTwo: 'Option Two info field 7',
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
