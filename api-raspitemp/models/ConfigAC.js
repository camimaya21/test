const mongoose = require('mongoose')
const Schema = mongoose.Schema

const configACSchema = new Schema({
  room: Number,
  state: Number,
  temperture: Number,
  mode: Number,
  fanSpeed: Number,
  swing: Number,
  calendar: Date,
  ledtest: String //creado solo para el test del Led
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const ConfigAC = mongoose.model('ConfigAC', configACSchema)
module.exports = ConfigAC