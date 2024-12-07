import prisma from '../../prisma/prismaClient.js'
import express from 'express'

const serviceRouter = express.Router()

// Create a new service
serviceRouter.post('/', async (req, res) => {
  const { title, description, price, time, barbershopId } = req.body
  try {
    const service = await prisma.service.create({
      data: {
        title,
        description,
        price,
        time,
        barbershopId,
      },
    })
    res.status(201).json(service)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create service', reason: error })
  }
})

// Get all services
serviceRouter.get('/', async (req, res) => {
  try {
    const services = await prisma.service.findMany()
    res.status(200).json(services)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services', reason: error })
  }
})

// Get a single service by ID
serviceRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const service = await prisma.service.findUnique({
      where: { id: parseInt(id) },
    })
    if (service) {
      res.status(200).json(service)
    } else {
      res.status(404).json({ error: 'Service not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch service', reason: error })
  }
})

// Update a service by ID
serviceRouter.put('/:id', async (req, res) => {
  const { id } = req.params
  const { title, description, price, time, active } = req.body
  try {
    const service = await prisma.service.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        price,
        time,
        active,
      },
    })
    res.status(200).json(service)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update service', reason: error })
  }
})

// Delete a service by ID
serviceRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await prisma.service.delete({
      where: { id: parseInt(id) },
    })
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete service', reason: error })
  }
})

// Get all services for a specific barbershop
serviceRouter.get('/barbershops/:id', async (req, res) => {
  const { id } = req.params
  try {
    const services = await prisma.service.findMany({
      where: { barbershopId: parseInt(id) },
    })
    res.status(200).json(services)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services', reason: error })
  }
})

export default serviceRouter
