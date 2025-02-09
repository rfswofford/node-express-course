const CustomAPIError = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(400).json({ msg: err.message })
  }
  return res.status(500).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware