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
  productExamples: [], 
  recycledExamples: [],
  extraInfoPartOne: String,
  extraInfoPartTwo:  String,
  percentRecycled2015: Number,
  howToDetail: String,
})

const PlasticType = model('PlasticType', plasticTypeSchema)

module.exports = PlasticType
