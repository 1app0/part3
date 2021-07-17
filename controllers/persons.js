const personRouter = require('express').Router()
const Person = require('../models/person')

//get all persons from db
personRouter.get('/', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

// personRouter.get('/info', (request, response) => {
//   const date = new Date()
//   const phonebookLenght = `Phonebook has info for ${persons.length} people`
//   response.send(`<p>${phonebookLenght}</p><p>${date}</p>`)
// })

//get a person based on id
personRouter.get(`/:id`, (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

//delete a person based on id
personRouter.delete(`/:id`, (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

//save a person to db
personRouter.post(`/`, (request, response, next) => {
  const body = request.body

  if (!(body.name && body.number)) {
    return response.status(404).json({
      error: 'content missing',
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person
    .save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))
})

//update a person
personRouter.put(`/:id`, (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, {
    runValidators: true,
    new: true,
    context: 'query',
  })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

module.exports = personRouter
