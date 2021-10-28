const mongoose = require('mongoose')
const { Schema, model } = mongoose


const factoidSchema = new Schema({
  factoids: [],
})


const Factoids = model('factoids', factoidSchema)

module.exports = Factoids
