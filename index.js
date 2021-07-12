const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')

morgan.token('reqBody', (req, res) => {
  const person = req.body

  return JSON.stringify(person)
})

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :response-time ms :reqBody'))

const baseUri = '/api/persons'

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]

//get all persons
app.get(baseUri, (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const date = new Date()
  const phonebookLenght = `Phonebook has info for ${persons.length} people`
  response.send(`<p>${phonebookLenght}</p><p>${date}</p>`)
})

app.get(`${baseUri}/:id`, (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete(`${baseUri}/:id`, (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => Math.floor(Math.random() * 1000)

app.post(`${baseUri}`, (request, response) => {
  const body = request.body

  if (!(body.name && body.number)) {
    return response.status(404).json({
      error: 'content missing',
    })
  }

  if (persons.some(person => person.name === body.name)) {
    return response.status(404).json({
      error: 'name must be unique',
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = proccess.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})