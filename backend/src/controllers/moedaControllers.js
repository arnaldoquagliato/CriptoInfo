const express = require('express')

const Moeda = require('../models/Moeda')

const router = express.Router()

router.post('/register', async (req, res) =>{
  try {
    const moeda = await Moeda.create(req.body)
    return res.send({moeda})
  } catch (error) {
    return res.status(400).send({error: 'Registration failed'})
  }
}) 

router.get('/coins', async (req, res) =>{
  try {
    const moedas = await Moeda.find()
    return res.send({moedas})
  } catch (error) {
    return res.status(400).send({error: 'Erro ao carregar lista de moedas'})
  }
}) 

router.get('/:coinId', async (req, res) =>{
  try {
    const moeda = await Moeda.findById(req.params.coinId).populate('moeda')
    return res.send({moeda})
  } catch (error) {
    return res.status(400).send({error: 'Erro no carregamento da moeda'})
  }
}) 

router.put('/:coinId', async (req, res) =>{
  const { name, valorMercado, baixa, alta, img } = req.body
  try {
    const moeda = await Moeda.findByIdAndUpdate(req.params.coinId, {
      name,
      valorMercado,
      baixa,
      alta,
      img
    }, {new: true})

    await moeda.save()
    return res.send({moeda})
  } catch (error) {
    return res.status(400).send({error: 'Erro na atualização da moeda'})
  }
}) 

router.delete('/:coinId', async (req, res) =>{
  try {
    const moeda = await Moeda.findByIdAndRemove(req.params.coinId)
    return res.send()
  } catch (error) {
    return res.status(400).send({error: 'Falha na deleção'})
  }
}) 

module.exports = app => app.use('/', router)