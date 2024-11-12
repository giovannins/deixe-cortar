import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

dotenv.config()

const app = express()
const port = process.env.PORT
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('poggers')
})

app.get('/dados', (req, res) => {
 res.send('foggers')
})

app.post('/json', (req, res) => {
const dados  = req.body
console.log (dados.nome)
res.json({ message: 'lumbertycoon', dados })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
