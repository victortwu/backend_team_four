const mongoose = require('mongoose')
const { Schema, model } = mongoose

const plasticTypeSchema = new Schema({
  recycleNumber: String,
  recycleInfoOptionOne: String,
  recycleInfoOptionTwo: String,
  recycleImages: [{type: String}]
})

const PlasticType = model('PlasticType', plasticTypeSchema)

module.exports = PlasticType
