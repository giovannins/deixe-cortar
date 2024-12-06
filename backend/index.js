import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import barbershopRouter from './src/barbershop/barbershopController.js'
import employeeRouter from './src/employee/employeeController.js'
import serviceRouter from './src/service/serviceController.js'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/api/barbershops', barbershopRouter)
app.use('/api/employees', employeeRouter)
app.use('/api/services', serviceRouter)

app.get('/', (req, res) => {
  res.send('<style>* {background-color: green;}</style>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
