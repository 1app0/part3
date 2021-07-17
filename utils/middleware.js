const logger = require('./logger')
const morgan = require('morgan')

morgan.token('reqBody', (req, res) => {
  let person = req.body

  return JSON.stringify(person)
})

const unknownEndpoint = (request, response) => {
  response.status(400).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'Malformed id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

module.exports = {
  morgan,
  unknownEndpoint,
  errorHandler,
}
