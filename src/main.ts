import Express from 'express'

const app = Express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World !' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Server running on port 3000')
})