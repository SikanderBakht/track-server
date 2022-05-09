require('./models/User')
const express = require('express')
const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)


const mongoUri = 'mongodb+srv://aghasikander:Dell4inspiron6@cluster0.dl8lz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mogoose.connect(mongoUri)

mongoose.connection.on('connected', () => {
    console.log('Connected to mongoose instance')
})

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo', err)
})

app.get('/', (req, res) => {
    res.send('Hi there!')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})