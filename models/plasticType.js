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
  productExamples: String, // <--- should be an array in the future
  recycledExamples: String, // <--- should be an array in the future
  recycleImages: [{type: String}]
})

const PlasticType = model('PlasticType', plasticTypeSchema)

module.exports = PlasticType
