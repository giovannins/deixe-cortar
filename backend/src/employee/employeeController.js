import express from 'express'
import prisma from '../../prisma/prismaClient.js'

const employeeRouter = express.Router()

// Get all employees
employeeRouter.get('/', async (req, res) => {
  try {
    const employees = await prisma.employee.findMany()
    res.json(employees)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employees', reason: error })
  }
})

// Get a single employee by ID
employeeRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const employee = await prisma.employee.findUnique({
      where: { id: parseInt(id) },
    })
    if (employee) {
      res.json(employee)
    } else {
      res.status(404).json({ error: 'Employee not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employee', reason: error })
  }
})

// Create a new employee
employeeRouter.post('/', async (req, res) => {
  const { name, phone, note, barbershopId } = req.body
  try {
    const newEmployee = await prisma.employee.create({
      data: {
        name,
        phone,
        note,
        barbershopId,
      },
    })
    res.status(201).json(newEmployee)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create employee', reason: error })
  }
})

// Update an employee
employeeRouter.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name, phone, note, barbershopId } = req.body
  try {
    const updatedEmployee = await prisma.employee.update({
      where: { id: parseInt(id) },
      data: {
        name,
        phone,
        note,
        barbershopId,
      },
    })
    res.json(updatedEmployee)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update employee', reason: error })
  }
})

// Delete an employee
employeeRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await prisma.employee.update({
      where: { id: parseInt(id) },
      data: { deletedAt: new Date() },
    })
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete employee', reason: error })
  }
})

// View all employees of a barbershop
employeeRouter.get('/barbershop/:id', async (req, res) => {
  const { id } = req.params
  try {
    const employees = await prisma.employee.findMany({
      where: { barbershopId: parseInt(id) },
    })
    res.json(employees)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employees', reason: error })
  }
})

export default employeeRouter
