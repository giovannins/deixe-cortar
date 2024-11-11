import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('foggers do poggers')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
