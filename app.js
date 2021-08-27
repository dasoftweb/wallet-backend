const express = require('express')
const logger = require('morgan')
const cors = require('cors')
// const swaggerDoc = require('./swaggerJSDoc')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(express.static('public'));

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
// swaggerDoc(app)

require('./configs/passport-config')

const authRouter = require('./routes/api/users')
app.use('/api/v1/users', authRouter)

const transactionsRouter = require('./routes/api/transactions')
app.use('/api/v1/transactions', transactionsRouter)

const statisticsRouter = require('./routes/api/statistics')
app.use('/api/v1/statistics', statisticsRouter)

const categoriesRouter = require('./routes/api/categories')
app.use('/api/v1/categories', categoriesRouter)

app.use((req, res) => {
  res.status(404).json({ status: 'error', code: 404, message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ status: 'error', code: 500, message: err.message })
})

module.exports = app
