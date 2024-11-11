import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

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
