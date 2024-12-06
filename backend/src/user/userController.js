import express from 'express'
import prisma from '../../prisma/prismaClient.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userRouter = express.Router()

// Register a new user
userRouter.post('/register', async (req, res) => {
  const { email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })
    user.password = undefined
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: 'User already exists', reason: error })
  }
})

// Login a user
userRouter.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id, email: user.email, role: user.role, barbershopId: user.barbershopId }, 'your_jwt_secret', { expiresIn: '1h' })
      res.status(200).json({ message: 'Login successful', token })
    } else {
      res.status(401).json({ error: 'Invalid email or password' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', reason: error })
  }
})

// Update user password
userRouter.put('/update-password', async (req, res) => {
  const { email, newPassword } = req.body
  const hashedPassword = await bcrypt.hash(newPassword, 10)

  try {
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    })
    res.status(200).json({ message: 'Password updated successfully' })
  } catch (error) {
    res.status(400).json({ error: 'User not found', reason: error })
  }
})

export default userRouter
