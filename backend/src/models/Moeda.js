const mongoose = require('../database')

const  MoedaSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
  valorMercado:{
    type: Number,
    require: true,

  }, 
  baixa:{
    type: Number,
    require: true,

  },
  alta:{
    type: Number,
    require: true,

  },
  img:{
    type: String,
    require: true,
  }, 
})

const Moeda = mongoose.model('Moeda', MoedaSchema)
module.exports = Moeda