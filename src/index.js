require('./models/User')
require('./models/Track')
const express = require('express')
const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewears/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

const mongoUri = 'mongodb+srv://aghasikander:Dell4inspiron6@cluster0.dl8lz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mogoose.connect(mongoUri)

mongoose.connection.on('connected', () => {
    console.log('Connected to mongoose instance')
})

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})