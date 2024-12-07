import express from 'express'
import prisma from '../../prisma/prismaClient.js'

const barbershopRouter = express.Router()

// Create a new barbershop
barbershopRouter.post('/', async (req, res) => {
  const { name, address, phone, banner, color, icon, email, active } = req.body
  try {
    const barbershop = await prisma.barbershop.create({
      data: { name, address, phone, banner, color, icon, email, active },
    })
    res.status(201).json(barbershop)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create barbershop', reason: error })
  }
})

// Get all barbershops
barbershopRouter.get('/', async (req, res) => {
  try {
    const barbershops = await prisma.barbershop.findMany({
      where: { deletedAt: null },
    })
    res.status(200).json(barbershops)

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch barbershops', reason: error })
  }
})

// Get a single barbershop by ID
barbershopRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const { withEmployees, withServices } = req.query
  try {
    const barbershop = await prisma.barbershop.findUnique({
      where: { id: Number(id) },
      include: {
        employees: withEmployees === 'true',
        services: withServices === 'true',
      },
    })
    if (barbershop) {
      res.status(200).json(barbershop)
    } else {
      res.status(404).json({ error: 'Barbershop not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch barbershop', reason: error })
  }
})

// Update a barbershop by ID
barbershopRouter.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name, address, phone, banner, color, icon, email, active } = req.body

  try {
    const barbershop = await prisma.barbershop.update({
      where: { id: Number(id) },
      data: { name, address, phone, banner, color, icon, email, active },
    })
    res.status(200).json(barbershop)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update barbershop', reason: error })
  }
})

// Delete a barbershop by ID
barbershopRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await prisma.barbershop.update({
      where: { id: Number(id) },
      data: { deletedAt: new Date() },
    })
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete barbershop', reason: error })
  }
})

export default barbershopRouter
