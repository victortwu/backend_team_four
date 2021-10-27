const mongoose = require('mongoose')
const { Schema, model } = mongoose

const plasticTypeSchema = new Schema({
  recycleNumber: String,
  recycleCode: String,
  plasticName: String,
  generalDescription: String,
  canRecycle: String,
  recycleInfoOne: String,
  recycleInfoTwo: String,
  productExamples: [], // <--- should be an array in the future
  recycledExamples: [], // <--- should be an array in the future
  extraInfoPartOne: String,
  extraInfoPartTwo:  String,
  percentRecycled2015: Number,
  howToDetail: String,
  randomFactoid: String
})

const PlasticType = model('PlasticType', plasticTypeSchema)

module.exports = PlasticType
