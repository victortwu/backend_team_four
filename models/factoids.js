const mongoose = require('mongoose')
const { Schema, model } = mongoose


const factoidSchema = new Schema({
  factoid: String,
})


const Factoids = model('factoids', factoidSchema)

module.exports = Factoids
